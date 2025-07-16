function autoType(){
    const text = '<span class="text-blue-500">Study Light</span>  এ স্বাগতম!</h1><br><br><p class="text-gray-700 text-lg mb-6">HSC পরীক্ষার্থীদের জন্য সহজে পড়াশোনা ও প্রস্তুতির সেরা জায়গা।<br>পরীক্ষার সময়সূচী, বই, টেস্ট ও MCQ উত্তর এক জায়গায়।<br><span class="bg-green-100 border-1-4 border-green-600 text-green-800 rounded-md shadow">নিজে সর্বোচ্চ চেষ্টা করুন, বাকিটা আল্লাহর হাতে।</span></p>';
    const container = document.getElementById("welcome");
    let index = 0;
    let temp = "";

    function type() {
        if (index < text.length) {
            temp += text[index];
            container.innerHTML = temp;
            index++;
            setTimeout(type, 40); 
        }
    }
    type();
}

autoType();


function getDate(){
    const rows = document.querySelectorAll("#examTable tbody tr");
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    rows.forEach(row => {
        const dateText = row.cells[0].textContent.trim();
        const parts = dateText.split("-");
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        const examDate = new Date(year, month, day);
        examDate.setHours(0, 0, 0, 0); 
        
        if (examDate.getTime() < today.getTime()) {
            row.classList.add("bg-red-200");
        } else if (examDate.getTime() === today.getTime()) {
            row.classList.add("bg-yellow-200", "font-semibold");
        } else {
            row.classList.add("bg-green-100");
        }

    });
}
getDate();

function goRead(){
    window.location.href = "type.html";
}

