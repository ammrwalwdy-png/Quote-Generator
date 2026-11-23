const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote");
const copyQuoteBtn = document.getElementById("copyQuote");
const message = document.getElementById("message");

const quotes = [
    {
        text: "لا بأس أن تتأخر، المهم ألا تتوقف.",
        author: "مجهول"
    },
    {
        text: "عامل نفسك بالرفق الذي تمنحه للآخرين.",
        author: "مجهول"
    },
    {
        text: "كل شيء يأتي في وقته، فلا تستعجل ما كُتب لك.",
        author: "مجهول"
    },
    {
        text: "ليس كل صامت مرتاح، وليس كل مبتسم سعيد.",
        author: "مجهول"
    },
    {
        text: "راحة البال أغلى من ألف شيء نحاول امتلاكه.",
        author: "مجهول"
    },
    {
        text: "كن أنت، فالعالم لا يحتاج نسخة أخرى.",
        author: "مجهول"
    },
    {
        text: "بعض النهايات هي بدايات لأشياء أجمل.",
        author: "مجهول"
    },
    {
        text: "لا تقارن بدايتك بنهاية شخص آخر.",
        author: "مجهول"
    },
    {
        text: "الأيام الصعبة لا تدوم، لكن القوة التي نتعلمها منها تبقى.",
        author: "مجهول"
    },
    {
        text: "أحيانًا يكون الهدوء أجمل رد.",
        author: "مجهول"
    },
    {
        text: "اختر ما يطمئن قلبك، لا ما يرضي الجميع.",
        author: "مجهول"
    },
    {
        text: "أجمل ما يمكن أن تصل إليه هو أن تكون راضيًا عن نفسك.",
        author: "مجهول"
}
];

// تغيير الاقتباس
function getNewQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[randomIndex].text;
    author.textContent = "— " + quotes[randomIndex].author;

    message.textContent = "";
}

// زر اقتباس جديد
newQuoteBtn.addEventListener("click", getNewQuote);

// نسخ الاقتباس
copyQuoteBtn.addEventListener("click", async function () {
    const fullQuote = quote.textContent + "\n" + author.textContent;

    try {
        await navigator.clipboard.writeText(fullQuote);
        message.textContent = "تم نسخ الاقتباس بنجاح";
    } catch (error) {
        message.textContent = "لم نتمكن من نسخ الاقتباس";
    }
});