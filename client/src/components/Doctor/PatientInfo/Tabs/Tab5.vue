<template>
  <v-form v-model="valid" ref="form">
    <v-container>
      <v-layout>

        <v-flex md3>
          <p><font color="#808080">Чи отримує пацієнт на сьогоднішній день замісну імуноглобулінотерапію?</font></p>
          <v-text-field
            v-model="replacementImunoqlobulinTherary.rit_till_today"
            solo
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080">Виробник імуноглобулінів, які отримує пацієнт:</font></p>
          <v-text-field
            v-model="replacementImunoqlobulinTherary.imunoqlobulin_producer"
            solo
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2 >
          <p>
          	<font color="#808080">
          		<br/>Дата першого введення
          	</font>
          </p>
          <v-text-field
            v-model="replacementImunoqlobulinTherary.first_imunoqlobulin_injection_data"
            solo
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md3>
          <p><font color="#808080"><br/>Актуальний шлях введення імуноглобуліну:</font></p>
          <v-text-field
            v-model="replacementImunoqlobulinTherary.actual_injection_way"
            solo
            readonly
          ></v-text-field>
        </v-flex>

      </v-layout>
    </v-container>

    <v-container>
      <v-layout>
      	
        <v-flex md3>
          <p>
          	<font color="#808080">
          		Актуальне місце введення імуноглобуліну:
          	</font>
          </p>
          <v-text-field
            v-model="replacementImunoqlobulinTherary.actual_injection_location"
            solo
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Доза:</font></p>
          <v-text-field
            v-model="replacementImunoqlobulinTherary.dosa"
            solo
            readonly
          ></v-text-field>
        </v-flex>
        <v-flex md2>
          <p><font color="#808080">Інтервал між введенями</font></p>
          <v-text-field
            v-model="replacementImunoqlobulinTherary.injection_interval"
            solo
            readonly
          ></v-text-field>
        </v-flex>

        <v-flex md2>
          <p><font color="#808080">Зафіксовані небажані явища</font></p>
          <v-text-field
            v-model="replacementImunoqlobulinTherary.recorded_phenomenal"
            solo
            readonly
          ></v-text-field>
         </v-flex>

         <v-flex md1>
          <p>
          	<font color="#808080">
          		Актуальна вага:
          	</font>
          </p>
          <v-text-field
            v-model="replacementImunoqlobulinTherary.patient_weight"
            solo
            readonly
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
	<v-btn @click="add" to="/newpatient">Додати</v-btn>
 </v-form>
</template>

<script>
export default {
    data(){
        return{
            replacementImunoqlobulinTherary:{
                rit_till_today: "Так", 
                first_imunoqlobulin_injection_data: "22-08-2007",  
                imunoqlobulin_producer: "2",   
                actual_injection_way: "Підшкірно",  
                actual_injection_location: "В лікарні",  
                dosa: "10 мг/кг", 
                injection_interval: "Так", 
                patient_weight: "80 кг",  
                recorded_phenomenal: "Так, анафілаксія",  
            },
        }
    },
}
</script>