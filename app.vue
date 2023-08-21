<template>
  <div>

    <v-row>
      <v-col v-for="member in chData" :key="member.id" cols="auto" lg="12" md="12" sm="12">

        <v-container class="memData" ref="memData">
          <v-btn icon><v-icon>mdi-printer</v-icon></v-btn><br>
          <h1 class="text-center">Membership Data</h1><br>
          <!-- <p class="text-muted">{{ member['Church Number'] }}</p> -->
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Fullname:</v-label>
              <p class="text-capitalize">{{ member['Full Name'] }}</p><br />
              <!-- <p v-else></p> -->
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Phone Number</v-label>
              <div class="text-area" v-if="member['Phone / Contact numbers'] === null"></div>
              <p v-else-if="member['Phone / Contact numbers'].length < 10">0{{ member['Phone / Contact numbers'] }}</p>
              <p v-else>{{ member['Phone / Contact numbers'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Date of Birth</v-label>
              <p class="text-area" v-if="member['Date of birth'] === null"></p>
              <p v-else>{{ member['Date of birth'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Place of Birth</v-label>
              <p class="text-area" v-if="member['Place of birth'] === null"></p>
              <p v-else class="text-capitalize">{{ member['Place of birth'] }} </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Date of Baptism</v-label>
              <p class="text-area" v-if="member['Date of baptism'] === null"></p>
              <p v-else>{{ member['Date of baptism'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Sex</v-label>
              <p class="text-area" v-if="member['sex'] === null"></p>
              <p v-else class="text-capitalize">{{ member['sex'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Place of Baptism</v-label>
              <p class="text-area" v-if="member['Place of baptism'] === null"></p>
              <p v-else class="text-capitalize">{{ member['Place of baptism'] }} </p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Father's Name</v-label>
              <p class="text-area" v-if="member['Name of father'] === null"></p>
              <p v-else class="text-capitalize">{{ member['Name of father'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Mother's Name</v-label>
              <p class="text-area" v-if="member['Name of mother'] === null"></p>
              <p v-else class="text-capitalize">{{ member['Name of mother'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Nationality</v-label>
              <p class="text-area" v-if="member['Nationality'] === null"></p>
              <p v-else class="text-capitalize">{{ member['Nationality'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Region you come form if you're Ghanaian</v-label>
              <!-- <p v-if="member["Region you come from if you're Ghanaian"]===null">_________________________</p> -->
              <p class="text-capitalize">{{ member["Region you come from if you're Ghanaian"] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Residential Address</v-label>
              <p class="text-area"
                v-if="member['Residential Address (location, Hse. No., Popular locations) or '] === null">
              </p>
              <p v-else class="text-capitalize">
                {{ member['Residential Address (location, Hse. No., Popular locations) or'] }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Spoken Languages</v-label>
              <p class="text-area" v-if="member['Spoken Language(s)'] === null"></p>
              <p v-else class="text-capitalize">{{ member['Spoken Language(s)'] }}</p>
            </v-col>
            <v-col cols="auto" sm="6" md="6" lg="6">
              <v-label>Highest Educational Background</v-label>
              <p class="text-area" v-if="member['Highest educational background'] === null"></p>
              <p v-else class="text-capitalize">{{ member['Highest educational background'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>List any known Disability or Chronic Health Issue</v-label>
              <p class="text-area" v-if="member['List any known disability or chronic health issue'] === null"></p>
              <p v-else class="text-capitalize">{{ member['List any known disability or chronic health issue'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Marital Status</v-label>
              <p class="text-area" v-if="member['Marital Status '] === null"></p>
              <p v-else class="text-capitalize">{{ member['Marital Status '] }}</p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Do you have any children?</v-label>
              <p class="text-area" v-if="member['Do you have any children?'] === null"></p>
              <p v-else class="text-capitalize">{{ member['Do you have any children?'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>List of children and their ages(including Biological ones)</v-label>
              <p class="text-area"
                v-if="member['List of Children and their ages (including Biological ones) if '] === null">
              </p>
              <p v-else class="text-capitalize">
                {{ member['List of Children and their ages (including Biological ones) if'] }}
              </p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Type of marriage</v-label>
              <p class="text-area" v-if="member['Type of marriage'] === null"></p>
              <p v-else class="text-capitalize">{{ member['Type of marriage'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Name of Spouse</v-label>
              <p class="text-area" v-if="member['Name of Spouse'] === null"></p>
              <p v-else class="text-capitalize">{{ member['Name of Spouse'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Employment Status</v-label>
              <p class="text-area" v-if="member['Employment Status'] === null"></p>
              <p v-else class="text-capitalize">{{ member['Employment Status'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Occupation</v-label>
              <p class="text-area" v-if="member['Occupation'] === null"></p>
              <p class="text-capitalize">{{ member['Occupation'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Place of Work</v-label>
              <div class="text-area" v-if="member['Place of Work'] === null"></div>
              <p v-else class="text-capitalize">{{ member['Place of Work'] }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

  </div>
</template>
<script setup>
import chData from './chmembers.json';

// import html2pdf from 'html2pdf.js'
// const printData = async () => {
//   if (!$isClient) {
//     console.log("Running")
//     return;
//   }
//   const print = document.querySelector('.memData');
//   const options = {
//     filename: chData['Full Name'],
//     margin: [0, 0, 0, 0],
//     image: { type: "jpeg", quality: 0.98 },
//     html2canvas: { scale: 2 },
//     jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
//   };

//   try {
//     // const pdf = await html2pdf().from(print).outputPdf();
//   } catch (error) {
//     console.log(error)
//   }
// };


// html2pdf().set(options).from(printData).save();
</script>
<style scoped>
.text-area {
  border-style: solid solid solid solid;
  height: 4em;
  /* border-radius: 50%; */
}
</style>
