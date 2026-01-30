function showSearch(usertext) {
    console.log("Searching for: " + usertext);
    document.getElementById('searchResult').innerText = "Searching for: " + usertext;
}


    // Feature 1: Search Interaction (Console မှာ စစ်ကြည့်လို့ရတယ်)
    function showSearch(val) {
        console.log("Searching for: " + val);
        
    }

    // Feature 2: Donate Message
    function sayThanks() {
        alert("Thank you for your kindness! Every donation helps our dogs.");
    }

   

function openModal(dogname, dogAbout, imgSrc, health, temper) {
    document.getElementById("dogModal").style.display = "block";    
    document.getElementById("modalName").innerText = dogname;
    document.getElementById("modalDescription").innerText = dogAbout;
    document.getElementById("modalImg").src = imgSrc;
    
    // ကျန်းမာရေးနဲ့ စရိုက်ကို တစ်ကောင်ချင်းစီအလိုက် ပြောင်းလဲပေးမယ့်အပိုင်း
    document.getElementById("modalHealth").innerText = "Health: " + health;
    document.getElementById("modalTemper").innerText = "Character: " + temper;
}

function closeModal() {
    document.getElementById("dogModal").style.display = "none";
}







