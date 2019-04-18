/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */

/**
 * Medical Record transaction processor function.
 * @param {com.mycontext.ChangeMedicalRecordOwner} tx
 * @transaction
 */
function changeMedicalRecordOwner(tx) {
    
    var getName = function(o) {
      return o.name;
    };

    var oldOwner = tx.medicalRecord.owner;
    tx.medicalRecord.owner = tx.newOwner;

    return getAssetRegistry(
      "com.mycontext.MedicalRecord"
    )
     .then(function(assetRegistry) {
        return assetRegistry.update(tx.medicalRecord);
      })
     .then(function() {
        
        var event = getFactory().newEvent(
          "com.mycontext",
          "MedicalRecordEvent"
        );

        event.medicalRecord = tx.medicalRecord;
        event.oldOwner = getName(oldOwner);
        event.newOwner = getName(tx.newOwner);
        
        emit(event);
      });
  }