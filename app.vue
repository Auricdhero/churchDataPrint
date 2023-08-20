<template>
  <div>

    <v-row>
      <v-col v-for="member in chData" :key="member.id" cols="auto" lg="12" md="12" sm="12">

        <v-container class="memData">
          <v-btn @click="printMember" icon><v-icon>mdi-printer</v-icon></v-btn><br>
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
              <p v-if="member['Phone / Contact numbers'] === null">_________________________</p>
              <p v-else>{{ member['Phone / Contact numbers'] }}</p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Date of Birth</v-label>
              <p v-if="member['Date of birth'] === null">_________________________</p>
              <p v-else>{{ member['Date of birth'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Place of Birth</v-label>
              <p v-if="member['Place of birth'] === null" class="text-capitalize">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Place of birth'] }} </p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Date of Baptism</v-label>
              <p v-if="member['Date of baptism'] === null">_________________________</p>
              <p v-else>{{ member['Date of baptism'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Sex</v-label>
              <p v-if="member['sex'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['sex'] }}</p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Place of Baptism</v-label>
              <p v-if="member['Place of baptism'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Place of baptism'] }} </p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Father's Name</v-label>
              <p v-if="member['Name of father'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Name of father'] }}</p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Mother's Name</v-label>
              <p v-if="member['Name of mother'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Name of mother'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Nationality</v-label>
              <p v-if="member['Nationality'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Nationality'] }}</p><br>
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
              <p v-if="member['Residential Address (location, Hse. No., Popular locations) or '] === null">
                _________________________</p>
              <p v-else class="text-capitalize">
                {{ member['Residential Address (location, Hse. No., Popular locations) or'] }}
              </p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Spoken Languages</v-label>
              <p v-if="member['Spoken Language(s)'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Spoken Language(s)'] }}</p>
            </v-col>
            <v-col cols="auto" sm="6" md="6" lg="6">
              <v-label>Highest Educational Background</v-label>
              <p v-if="member['Highest educational background'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Highest educational background'] }}</p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>List any known Disability or Chronic Health Issue</v-label>
              <p v-if="member['List any known disability or chronic health issue'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['List any known disability or chronic health issue'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Marital Status</v-label>
              <p v-if="member['Marital Status '] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Marital Status '] }}</p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Do you have any children?</v-label>
              <p v-if="member['Do you have any children?'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Do you have any children?'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>List of children and their ages(including Biological ones)</v-label>
              <p v-if="member['List of Children and their ages (including Biological ones) if '] === null">
                _________________________</p>
              <p v-else class="text-capitalize">
                {{ member['List of Children and their ages (including Biological ones) if'] }}
              </p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Type of marriage</v-label>
              <p v-if="member['Type of marriage'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Type of marriage'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Name of Spouse</v-label>
              <p v-if="member['Name of Spouse'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Name of Spouse'] }}</p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Employment Status</v-label>
              <p v-if="member['Employment Status'] === null">_________________________</p>
              <p v-else class="text-capitalize">{{ member['Employment Status'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Occupation</v-label>
              <p v-if="member['Occupation'] === null">_________________________</p><br>
              <p class="text-capitalize">{{ member['Occupation'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Place of Work</v-label>
              <p v-if="member['Place of Work'] === null">_________________________</p>
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
// console.log(chData)

function printMember() {
  this.$htmlToPaper('memData')
}
</script>
<style scoped>
/* @media print {
  .memData {
    display: contents;
  }
} */
</style>
