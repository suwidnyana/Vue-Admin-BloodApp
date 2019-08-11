<template>
  <div class="container margin-atas">
    
    <b-card>
      
      <b-table striped hover responsive :items="Donors" :key="key">
      </b-table>
         
     <button @click="createPDF">Download PDF</button>
    </b-card>

  </div>
</template>

<script>
import jsPDF from 'jspdf'
import { DonorRef, profileRef } from '../firebase'
export default {
    name: 'Donor',
    data() {
        return {
            pendonor : DonorRef,
            Donors: [],
            items: [

              { name: 'suwidnyana'},
               { name: 'suwidnyana'}
            ]


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
              Pendonor: snapshotPemesan[0].nama,
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
              Pendonor: snapshotPemesan[0].nama,
              permintaan: item.permintaan,
              status: item.status,
              tempat: item.tempat,
              today: item.today
            });
          }
        });
      });
    },

    methods: {
    createPDF () {
       var doc = new jsPDF()
      doc.text('Hello world!', 10, 10)
      doc.save('a4.pdf')
      }
    }
}
</script>

<style>
.margin-atas  {
    margin-top: 20px;
}
</style>
