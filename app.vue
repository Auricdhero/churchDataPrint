<template>
  <div>

    <v-row>
      <!-- <h1>{{ fullName }}</h1> -->
      <v-col v-for="member in chData" :key="member.id" cols="auto" lg="12" md="12" sm="12">

        <v-container class="memData" ref="memData">
          <v-btn icon><v-icon>mdi-printer</v-icon></v-btn><br>
          <h1 class="text-center">Membership Data</h1><br>
          <!-- <p class="text-muted">{{ member['Church Number'] }}</p> -->
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Fullname:</v-label>
              <p :fullname="member['Full Name']" class="text-capitalize">{{ useChangeCase(member['Full Name'],
                'capitalCase') }}</p><br />
              <!-- <p v-else></p> -->
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Phone Number</v-label>
              <div class="text-area" v-if="member['Phone / Contact numbers'] === null"></div>
              <p :phonenumber="member['Phone / Contact numbers']"
                v-else-if="member['Phone / Contact numbers'].length < 10">
                0{{ member['Phone / Contact numbers'] }}</p>
              <p :phonenumber="member['Phone / Contact numbers']" v-else>{{ member['Phone / Contact numbers'] }}</p>
              <!-- <p v-else>{{ member['Phone / Contact numbers'] }}</p> -->
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Date of Birth</v-label>
              <p class="text-area dob" v-if="member['Date of birth'] === null"></p>
              <p :dob="member['Date of birth']" v-else>{{ useDateFormat(member['Date of birth'], "MMMM D YYYY")  }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Place of Birth</v-label>
              <p class="text-area" v-if="member['Place of birth'] === null"></p>
              <p :birthPlace="member['Place of birth']" v-else class="text-capitalize">{{ useChangeCase(member['Place of birth'], 'capitalCase') }} </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Date of Baptism</v-label>
              <p class="text-area dobp" v-if="member['Date of baptism'] === null"></p>
              <p :baptismDate="member['Date of baptism']" v-else>{{ useDateFormat(member['Date of baptism'], "MMMM D YYYY") }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Sex</v-label>
              <p class="text-area" v-if="member['sex'] === null"></p>
              <p :sex="member['sex']" v-else class="text-capitalize">{{ member['sex'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Place of Baptism</v-label>
              <p class="text-area" v-if="member['Place of baptism'] === null"></p>
              <p :birthPlace="member['Place of baptism']" v-else class="text-capitalize">{{ member['Place of baptism'] }}
              </p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Father's Name</v-label>
              <p class="text-area" v-if="member['Name of father'] === null"></p>
              <p :fathersName="member['Name of father']" v-else class="text-capitalize">{{ useChangeCase( member['Name of father'], 'capitalCase') }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Mother's Name</v-label>
              <p class="text-area" v-if="member['Name of mother'] === null"></p>
              <p :mothersName="member['Name of mother']" v-else class="text-capitalize">{{ useChangeCase( member['Name of mother'], 'capitalCase') }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Nationality</v-label>
              <p class="text-area" v-if="member['Nationality'] === null"></p>
              <p v-else :nationality="member['Nationality']" class="text-capitalize">{{ useChangeCase(member['Nationality'], 'capitalCase') }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Region you come form if you're Ghanaian</v-label>
              <p class="text-area" v-if="member['Region you come from if youre Ghanaian'] === null"></p>
              <p :region="member['Region you come from if youre Ghanaian']" class="text-capitalize">
                {{ member['Region you come from if youre Ghanaian'] }}
              </p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Residential Address</v-label>
              <p class="text-area"
                v-if="member['Residential Address (location, Hse. No., Popular locations) or '] === null">
              </p>
              <p :residentialAdd="member['Residential Address (location, Hse. No., Popular locations) or']" v-else
                class="text-capitalize">
                {{ member['Residential Address (location, Hse. No., Popular locations) or'] }}
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Spoken Languages</v-label>
              <p class="text-area" v-if="member['Spoken Language(s)'] === null"></p>
              <p :languages="member['Spoken Language(s)']" v-else class="text-capitalize">{{ member['Spoken Language(s)']
              }}</p>
            </v-col>
            <v-col cols="auto" sm="6" md="6" lg="6">
              <v-label>Highest Educational Background</v-label>
              <p class="text-area" v-if="member['Highest educational background'] === null"></p>
              <p :educationLevel="member['Highest educational background']" v-else class="text-capitalize">{{
                member['Highest educational background'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>List any known Disability or Chronic Health Issue</v-label>
              <p class="text-area" v-if="member['List any known disability or chronic health issue'] === null"></p>
              <p :disabilities="member['List any known disability or chronic health issue']" v-else
                class="text-capitalize">{{ member['List any known disability or chronic health issue'] }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Marital Status</v-label>
              <p class="text-area" v-if="member['Marital Status '] === null"></p>
              <p :maritalStatus="member['Marital Status ']" v-else class="text-capitalize">{{ member['Marital Status '] }}
              </p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Do you have any children?</v-label>
              <p class="text-area" v-if="member['Do you have any children?'] === null"></p>
              <p :children="member['Do you have any children?']" v-else class="text-capitalize">
                {{ member['Do you have any children?'] }}
              </p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>List of children and their ages(including Biological ones)</v-label>
              <p class="text-area"
                v-if="member['List of Children and their ages (including Biological ones) if '] === null">
              </p>
              <p :listChildren="member['List of Children and their ages (including Biological ones) if']" v-else
                class="text-capitalize">
                {{ member['List of Children and their ages (including Biological ones) if'] }}
              </p><br>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Type of marriage</v-label>
              <p class="text-area" v-if="member['Type of marriage'] === null"></p>
              <p :marriageType="member['Type of marriage']" v-else class="text-capitalize">{{ member['Type of marriage']
              }}</p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Name of Spouse</v-label>
              <p class="text-area" v-if="member['Name of Spouse'] === null"></p>
              <p :spouseName="member['Name of Spouse']" v-else class="text-capitalize">{{ member['Name of Spouse'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Employment Status</v-label>
              <p class="text-area" v-if="member['Employment Status'] === null"></p>
              <p :employmentStatus="member['Employment Status']" v-else class="text-capitalize">
                {{ member['Employment Status'] }}
              </p>
            </v-col>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Occupation</v-label>
              <p class="text-area" v-if="member['Occupation'] === null"></p>
              <p :occupation="member['Occupation']" class="text-capitalize">{{ member['Occupation'] }}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="auto" sm="12" md="6" lg="6">
              <v-label>Place of Work</v-label>
              <div class="text-area" v-if="member['Place of Work'] === null"></div>
              <p :workPlace="member['Place of Work']" v-else class="text-capitalize">{{ member['Place of Work'] }}</p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

  </div>
</template>
<script setup>
import chData from './chmembers.json';
import {useDateFormat} from '@vueuse/core'
import { useChangeCase } from '@vueuse/integrations/useChangeCase'



</script>
<style scoped>
.text-area {
  border-style: solid solid solid solid;
  height: 4em;
  width: auto;
  /* border-radius: 50%; */
}

.text-capitalize {
  visibility: visible;
}
</style>
