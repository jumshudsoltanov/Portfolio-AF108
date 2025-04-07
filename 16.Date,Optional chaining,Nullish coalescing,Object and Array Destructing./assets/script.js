// 1.Date obyektindən istifadə etməklə elə bir şərt yazın ki istifadəçi sayta daxil olanda daxil olduğu saata uyğun ona mesaj çıxarsın

function myMessage() {
    const now = new Date();
    const hour = now.getHours();
    let message;

    if (hour >= 6 && hour < 12) {
        message = "Sabahınız xeyir!";
    } else if (hour >= 12 && hour < 18) {
        message = "Günortanız xeyir!";
    } else if (hour >= 18 && hour < 22) {
        message = "Axşamınız xeyir!";
    } else {
        message = "Gecəniz xeyir!";
    }

    alert(message);
};

myMessage();



// 2.Object Destructing istifadə edərək employee  obyektindən name, department və contact (email, phone, emergencyContact sahələri daxil olmaqla) məlumatlarını əldə edin. Həmçinin emergencyContact-də name və relation məlumatı əldə edin.

const employee = {
    name: "Farid Ali",
    department: "Engineering",
    contact: {
      email: "farid.ali@example.com",
      phone: "555-1234",
      emergencyContact: {
        name: "Far For",
        relation: "Spouse"
      }
    }
  };
  
  const {
    name,
    department,
    contact: {
      email,
      phone,
      emergencyContact: {
        name: emergencyContactName,
        relation: emergencyRelation
      }
    }
  } = employee;
  
  console.log("name:", name);
  console.log("department:", department);
  console.log("email:", email);
  console.log("phone:", phone);
  console.log("emergencyContactName:", emergencyContactName);
  console.log("emergencyRelation:", emergencyRelation);

  
// 3.Bu API-dən alınan məlumatları təmsil edir

  const apiResponse = [
    {
      id: 1,
      title: "JavaScript əsasları",
      author: "Səid Məmmədov",
      stats: [2500, 150, 30]
    },
    {
      id: 2,
      title: "Array Destructuring",
      author: "Leyla Əliyeva",
      stats: [1800, 220, 45]
    },
    {
      id: 3,
      title: "Müasir JavaScript",
      author: "Tural Həsənli",
      stats: [3200, 380, 70]
    }
  ];
  

  const { title, author, stats } = apiResponse[1];

  const [oxunma, beyenme, serhler] = stats;
  

  console.log(`Məqalə: ${title}, Müəllif: ${author}, ${oxunma} oxunma, ${beyenme} bəyənmə, ${serhler} şərh`);
  
// 4.Bu tapşırıqda hər iki operatoru birlikdə istifadə edin

  function renderUserProfile(userData) {
    return {
      username: userData?.user?.username ?? "Qonaq",
      avatar: userData?.user?.profile?.avatar ?? "/default-avatar.png",
      bio: userData?.user?.profile?.bio ?? "Məlumat yoxdur",
      email: userData?.user?.contact?.email ?? "təyin edilməyib",
      premium: userData?.user?.account?.premium ?? false
    };
  }
  