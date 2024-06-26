var a = {
    mobiles: {
        Samsung: {
            SamsungA10: {
                name: "Samsung A10",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "22,000 PKR"
            },
            SamsungA20: {
                name: "Samsung A20",
                ram: "4gb",
                rom: "64gb",
                camera: "18",
                price: "28,000"
            },
            SamsungA30: {
                name: "Samsung A30",
                ram: "4gb",
                rom: "64gb",
                camera: "25",
                price: "29,000"
            }
        },
        IPhone: {
            IPhone11: {
                name: "IPhone11",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "100,000"
            },
            IPhone12: {
                name: "IPhone12",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "150,000"
            },
            IPhone13: {
                name: "IPhone13",
                ram: "6gb",
                rom: "128gb",
                camera: "24",
                price: "200,000"
            }
        },
        Oppo: {
            OppoV20: {
                name: "OppoV20",
                ram: "8gb",
                rom: "128gb",
                camera: "64",
                price: "54,999"
            },
            OppoF19: {
                name: "OppoF19",
                ram: "6gb",
                rom: "128gb",
                camera: "48",
                price: "36,999"
            },
            OppoF11: {
                name: "OppoF11",
                ram: "4gb",
                rom: "64gb",
                camera: "48",
                price: "35,999"
            }
        },
        Vivo: {
            VivoY20: {
                name: "VivoY20",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "26,999"
            },
            VivoY21: {
                name: "VivoY21",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "43,999"
            },
            VivoY55: {
                name: "VivoY55",
                ram: "8gb",
                rom: "128gb",
                camera: "50",
                price: "64,999"
            }
        }
    }
}
  
  let phoneName = document.getElementById("phoneParent");
  let phoneModel = document.getElementById("modelParent");
  
  function fillPhones() {
    let phones = Object.keys(a.mobiles);
    phoneName.innerHTML = "";
    for (var i = 0; i < phones.length; i++) {
      phoneName.innerHTML += `
      <option value = '${phones[i]}'>${phones[i]}</option>
      `;
    }
  }
  
  fillPhones();
  
  function fillModel() {
    phoneModel.disabled = false;
    let models = Object.keys(a.mobiles[phoneName.value]);
    console.log(models);
    phoneModel.innerHTML = "";
    for (var i = 0; i < models.length; i++) {
      phoneModel.innerHTML += `
      <option value = '${models[i]}'>${models[i]}</option>
      `;
    }
  }
  
  function showSpecs() {
    let specsParent = document.getElementById("specsParent");
    let specs = a.mobiles[phoneName.value][phoneModel.value];
    let headings = Object.keys(specs);
    let values = Object.values(specs);
    console.log(specs);
    specsParent.innerHTML = "";
    for (var i = 0; i < headings.length; i++) {
      specsParent.innerHTML += `
        <li>${headings[i]} </> : ${values[i]}</li>
        `;
    }
  }
