<template>
  <div>

    <v-row>
      <!-- <h1>{{ fullName }}</h1> -->
      <v-col v-for="member in chData" :key="member.id" cols="12">


        <!-- <v-btn id="printData" icon><v-icon>mdi-printer</v-icon></v-btn><br> -->
        <h1 class="text-center">Membership Data</h1>
        <!-- <p class="text-muted">{{ member['Church Number'] }}</p> -->
        <v-row>
          <v-col cols="6" lg="6">
            <v-label class="label">Fullname:</v-label>
            <p class="text-capitalize">
              {{ useChangeCase(member['Full Name'], 'capitalCase') }}
            </p><br />
            <!-- <p v-else></p> -->
          </v-col>
          <v-col cols="6" lg="6">
            <v-label class="label">Phone Number</v-label>
            <div class="text-area" v-if="member['Phone / Contact numbers'] === null"></div>
            <p v-else-if="member['Phone / Contact numbers'].length < 10">
              0{{ member['Phone / Contact numbers'] }}</p>
            <p v-else>{{ member['Phone / Contact numbers'] }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label class="label">Date of Birth</v-label>
            <p class="text-area dob" v-if="member['Date of birth'] === null"></p>
            <p v-else>{{ useDateFormat(member['Date of birth'], 'MMMM D, YYYY') }}</p>
          </v-col>
          <v-col cols="6">
            <v-label class="label">Place of Birth</v-label>
            <p class="text-area" v-if="member['Place of birth'] === null"></p>
            <p v-else class="text-capitalize">
              {{ useChangeCase(member['Place of birth'], 'capitalCase') }}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label class="label">Date of Baptism</v-label>
            <p class="text-area dobp" v-if="member['Date of baptism'] === null"></p>
            <p v-else>
              {{ useDateFormat(member['Date of baptism'], "MMMM D, YYYY") }}
            </p>
          </v-col>
          <v-col cols="6">
            <v-label class="label">Sex</v-label>
            <p class="text-area" v-if="member['sex'] === null"></p>
            <p v-else class="text-capitalize">{{ member['sex'] }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label class="label">Place of Baptism</v-label>
            <p class="text-area" v-if="member['Place of baptism'] === null"></p>
            <p v-else class="text-capitalize">{{ member['Place of baptism'] }}
            </p>
          </v-col>
          <v-col cols="6">
            <v-label class="label">Father's Name</v-label>
            <p class="text-area" v-if="member['Name of father'] === null"></p>
            <p v-else class="text-capitalize">
              {{ useChangeCase(member['Name of father'], 'capitalCase') }}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label class="label">Mother's Name</v-label>
            <p class="text-area" v-if="member['Name of mother'] === null"></p>
            <p v-else class="text-capitalize">
              {{ useChangeCase(member['Name of mother'], 'capitalCase') }}
            </p>
          </v-col>
          <v-col cols="6">
            <v-label class="label">Nationality</v-label>
            <p class="text-area" v-if="member['Nationality'] === null"></p>
            <p v-else class="text-capitalize">
              {{ useChangeCase(member['Nationality'], 'capitalCase') }}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label class="label">Region you come form if you're Ghanaian</v-label>
            <p class="text-area" v-if="member['Region you come from if youre Ghanaian'] === null"></p>
            <p class="text-capitalize">
              {{ member['Region you come from if youre Ghanaian'] }}
            </p>
          </v-col>
          <v-col cols="6">
            <v-label class="label">Residential Address</v-label>
            <p class="text-area"
              v-if="member['Residential Address (location, Hse. No., Popular locations) or '] === null">
            </p>
            <p v-else class="text-capitalize">
              {{ member['Residential Address (location, Hse. No., Popular locations) or'] }}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label class="label">Spoken Languages</v-label>
            <p class="text-area" v-if="member['Spoken Language(s)'] === null"></p>
            <p v-else class="text-capitalize">
              {{ member['Spoken Language(s)'] }}
            </p>
          </v-col>
          <v-col cols="6">
            <v-label class="label">Highest Educational Background</v-label>
            <p class="text-area" v-if="member['Highest educational background'] === null"></p>
            <p v-else class="text-capitalize">
              {{ member['Highest educational background'] }}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label class="label">List any known Disability or Chronic Health Issue</v-label>
            <p class="text-area" v-if="member['List any known disability or chronic health issue'] === null"></p>
            <p v-else class="text-capitalize">{{ member['List any known disability or chronic health issue'] }}</p>
          </v-col>
          <v-col cols="6">
            <v-label class="label">Marital Status</v-label>
            <p class="text-area" v-if="member['Marital Status '] === null"></p>
            <p v-else class="text-capitalize">{{ member['Marital Status '] }}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label class="label">Do you have any children?</v-label>
            <p class="text-area" v-if="member['Do you have any children?'] === null"></p>
            <p v-else class="text-capitalize">
              {{ member['Do you have any children?'] }}
            </p>
          </v-col>
          <v-col cols="6">
            <v-label class="label">List of children and their ages(including Biological ones)</v-label>
            <p class="text-area"
              v-if="member['List of Children and their ages (including Biological ones) if '] === null">
            </p>
            <p v-else class="text-capitalize">
              {{ member['List of Children and their ages (including Biological ones) if'] }}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label class="label">Type of marriage</v-label>
            <p class="text-area" v-if="member['Type of marriage'] === null"></p>
            <p v-else class="text-capitalize">{{ member['Type of marriage'] }}</p>
          </v-col>
          <v-col cols="6">
            <v-label class="label">Name of Spouse</v-label>
            <p class="text-area" v-if="member['Name of Spouse'] === null"></p>
            <p v-else class="text-capitalize">{{ member['Name of Spouse'] }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label class="label">Employment Status</v-label>
            <p class="text-area" v-if="member['Employment Status'] === null"></p>
            <p v-else class="text-capitalize">
              {{ member['Employment Status'] }}
            </p>
          </v-col>
          <v-col cols="6">
            <v-label class="label">Occupation</v-label>
            <p class="text-area" v-if="member['Occupation'] === null"></p>
            <p class="text-capitalize">{{ member['Occupation'] }}</p>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-label class="label">Place of Work</v-label>
            <div class="text-area" v-if="member['Place of Work'] === null"></div>
            <p v-else class="text-capitalize">{{ member['Place of Work'] }}</p><br/>
          </v-col>
        </v-row>
        <br />
      </v-col>
    </v-row>

  </div>
</template>
<script setup>
import chData from './chmembers.json';
import { useDateFormat } from '@vueuse/core';
import { useChangeCase } from '@vueuse/integrations/useChangeCase';


</script>
<style scoped>
.text-area {
  border-style: solid solid solid solid;
  height: 3.3em;
  width: auto;
}

p {
  font-size: 12px;
  font-weight: bold !important;
}

.label {
  font-size: 12px;
}

@page {
  size: A4;
  width: max-content;
}
</style>