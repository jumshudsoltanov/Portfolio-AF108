//! Fuel Calc Task Script

let diesel = "Dizel - 0.90₼";
let fuel = "Benzin - 1₼";
let premiumFuel = "Premium Benzin - 1.5₼";

let fuelType = prompt(`Yanacaq Növü Seçin: 
1. ${diesel} 
2. ${fuel} 
3. ${premiumFuel}`);

switch (fuelType) {
  case "1":
    alert(`Seçdiyiniz Yanacaq Növü: ${diesel}`);
    if (true) {
      let fuelQuantity = Number(prompt(`Yanacaq Miqdarı Daxil Edin (lt):`));
      let totalPrice = fuelQuantity * 1;
      alert("Yekun Mebleğ:" + " " + "₼" + totalPrice);
      let payment = Number(prompt("Ödeniş ₼: "));
      if (payment == totalPrice) {
        alert("Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ 0₼ ");
      } else if (payment > totalPrice) {
        let amount = payment - totalPrice;
        alert(`Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ ${amount}₼ `);
      } else if (payment < totalPrice) {
        let amount = payment - totalPrice;
        alert(`Kifayət Qədər Vəsait Yoxdur: Gərəkli Məbləğ ${amount}₼ `);
      }
    }

    break;

  case "2":
    alert(`Seçdiyiniz Yanacaq Növü: ${fuel}`);
    if (true) {
      let fuelQuantity = Number(prompt(`Yanacaq Miqdarı Daxil Edin (lt):`));
      let totalPrice = fuelQuantity * 0.9;
      alert("Yekun Mebleğ:" + " " + "₼" + totalPrice);
      let payment = Number(prompt("Ödeniş ₼: "));
      if (payment == totalPrice) {
        alert("Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ 0₼ ");
      } else if (payment > totalPrice) {
        let amount = payment - totalPrice;
        alert(`Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ ${amount}₼ `);
      } else if (payment < totalPrice) {
        let amount = payment - totalPrice;
        alert(`Kifayət Qədər Vəsait Yoxdur: Gərəkli Məbləğ ${amount}₼ `);
      }
    }

    break;

  case "3":
    alert(`Seçdiyiniz Yanacaq Növü: ${premiumFuel}`);
    if (true) {
      let fuelQuantity = Number(prompt(`Yanacaq Miqdarı Daxil Edin (lt):`));
      let totalPrice = fuelQuantity * 1.5;
      alert("Yekun Mebleğ:" + " " + "₼" + totalPrice);
      let payment = Number(prompt("Ödeniş ₼: "));
      if (payment == totalPrice) {
        alert("Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ 0₼ ");
      } else if (payment > totalPrice) {
        let amount = payment - totalPrice;
        alert(`Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ ${amount}₼ `);
      } else if (payment < totalPrice) {
        let amount = payment - totalPrice;
        alert(`Kifayət Qədər Vəsait Yoxdur: Gərəkli Məbləğ ${amount}₼ `);
      }
    }

    break;

  default:
    alert("Yanlış seçim etdiniz!");
}

//! Months && Season Script

let autumn = "🌾 Sentyab, 🍁 Oktyab, 🌧 Noyabr";
let winter = "🌨 Dekabr, ☃️ Yanvar, 🧣 Fevral";
let summer = "🌸 Mart, 🌿 Aprel, 🌞 May";
let spring = "🌴 İyun, 🏖 İyul, 🍉 Avqust";

let season = prompt(`Bir Fəsil Seçin:
1. Qış
2. Yaz
3. Yay
4. Payız
`);

switch (season) {
  case "1":
    alert(`Qış Ayları Bunlardır: ${winter}`);
    break;
  case "2":
    alert(`Yaz Ayları Bunlardır: ${summer}`);
    break;
  case "3":
    alert(`Yay Ayları Bunlardır: ${spring}`);
    break;
  case "4":
    alert(`Payız Ayları Bunlardır: ${autumn}`);
    break;
    default:
    alert('Bele Bir Fəsil Yoxdur')
    break;
}
