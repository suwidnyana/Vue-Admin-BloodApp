<template>
  <div class="container margin-atas">
    <b-card>
      <b-table striped hover responsive :items="Donors" :key="key">
    </b-table>
    </b-card>
  </div>
</template>

<script>
import { DonorRef, profileRef } from '../firebase'
export default {
    name: 'Donor',
    data() {
        return {
            pendonor : DonorRef,
            Donors: []
        }
    },
    mounted() {
      this.pendonor.on('value', (snapshot) => {
        const result = Object.values(snapshot.val());
        let donors = [];

        result.map(async item => {
          const pemesan = await profileRef.orderByChild('id_user').equalTo(item.id_user).once('value');
          const snapshotPemesan = Object.values(pemesan.val());

          if(item.id_penerima !== undefined) {
            const penerima = await profileRef.orderByChild('id_user').equalTo(item.id_penerima).once('value');
            const snapshotPenerima = Object.values(penerima.val());

            this.Donors.push({
              date: item.date,
              day: item.day,
              detail: item.detail,
              goldar: item.goldar,
              nama_penerima: snapshotPenerima[0].nama,
              nama_pemesan: snapshotPemesan[0].nama,
              permintaan: item.permintaan,
              status: item.status,
              tempat: item.tempat,
              today: item.today
            });
          } else {
            this.Donors.push({
              date: item.date,
              day: item.day,
              detail: item.detail,
              goldar: item.goldar,
              nama_penerima: '',
              nama_pemesan: snapshotPemesan[0].nama,
              permintaan: item.permintaan,
              status: item.status,
              tempat: item.tempat,
              today: item.today
            });
          }
        });
      });
    },
}
</script>

<style>
.margin-atas  {
    margin-top: 20px;
}
</style>
