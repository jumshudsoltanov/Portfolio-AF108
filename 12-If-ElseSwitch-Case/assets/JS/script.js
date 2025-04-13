//! Fuel Calc Task Script

var diesel = "Dizel - 0.90₼";
var fuel = "Benzin - 1₼";
var premiumFuel = "Premium Benzin - 1.5₼";

var fuelType = prompt(`Yanacaq Növü Seçin: 
1. ${diesel} 
2. ${fuel} 
3. ${premiumFuel}`);

switch (fuelType) {
  case "1":
    alert(`Seçdiyiniz Yanacaq Növü: ${diesel}`);

    var fuelQuantity = Number(prompt(`Yanacaq Miqdarı Daxil Edin (lt):`));
    var totalPrice = fuelQuantity * 0.9;

    alert("Yekun Mebleğ:" + " " + "₼" + totalPrice);
    
    var payment = Number(prompt("Ödeniş ₼: "));
    if (payment == totalPrice) {
      alert("Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ 0₼ ");
    } else if (payment > totalPrice) {
      var amount = payment - totalPrice;
      alert(`Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ ${amount}₼ `);
    } else if (payment < totalPrice) {
      var amount = payment - totalPrice;
      alert(`Kifayət Qədər Vəsait Yoxdur: Gərəkli Məbləğ ${amount}₼ `);
    }
    
    break;

  case "2":
    alert(`Seçdiyiniz Yanacaq Növü: ${fuel}`);

      var fuelQuantity = Number(prompt(`Yanacaq Miqdarı Daxil Edin (lt):`));
      var totalPrice = fuelQuantity * 1;
      alert("Yekun Mebleğ:" + " " + "₼" + totalPrice);
      var payment = Number(prompt("Ödeniş ₼: "));
      if (payment == totalPrice) {
        alert("Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ 0₼ ");
      } else if (payment > totalPrice) {
        var amount = payment - totalPrice;
        alert(`Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ ${amount}₼ `);
      } else if (payment < totalPrice) {
        var amount = payment - totalPrice;
        alert(`Kifayət Qədər Vəsait Yoxdur: Gərəkli Məbləğ ${amount}₼ `);
      }
    

    break;

  case "3":
    alert(`Seçdiyiniz Yanacaq Növü: ${premiumFuel}`);

      var fuelQuantity = Number(prompt(`Yanacaq Miqdarı Daxil Edin (lt):`));
      var totalPrice = fuelQuantity * 1.5;
      alert("Yekun Mebleğ:" + " " + "₼" + totalPrice);
      var payment = Number(prompt("Ödeniş ₼: "));
      if (payment == totalPrice) {
        alert("Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ 0₼ ");
      } else if (payment > totalPrice) {
        var amount = payment - totalPrice;
        alert(`Ödəniş Uğurla Başa Çatdı Qalığ Məbləğ ${amount}₼ `);
      } else if (payment < totalPrice) {
        var amount = payment - totalPrice;
        alert(`Kifayət Qədər Vəsait Yoxdur: Gərəkli Məbləğ ${amount}₼ `);
      }
    

    break;

  default:
    alert("Yanlış seçim etdiniz!");
}

//! Months && Season Script

var autumn = "🌾 Sentyab, 🍁 Oktyab, 🌧 Noyabr";
var winter = "🌨 Dekabr, ☃️ Yanvar, 🧣 Fevral";
var summer = "🌸 Mart, 🌿 Aprel, 🌞 May";
var spring = "🌴 İyun, 🏖 İyul, 🍉 Avqust";

var season = prompt(`Bir Fəsil Seçin:
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
