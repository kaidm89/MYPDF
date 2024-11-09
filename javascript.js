const translations = {
    ar: {
        pageTitle: "تحويل الصور والنصوص إلى PDF",
        title: "تحويل الصور والنصوص إلى PDF",
        imageTitle: "تحويل الصور إلى PDF",
        textTitle: "تحويل النصوص إلى PDF",
        textPlaceholder: "أدخل النص هنا...",
        imageButton: "تحويل الصور إلى PDF",
        textButton: "تحويل النص إلى PDF",
        proMessageText: "لقد وصلت إلى الحد الأقصى من المحاولات. لتفعيل المزيد من المحاولات، الرجاء تفعيل خاصية PRO.",
        proButton: "تفعيل PRO - $1"
    },
    en: {
        pageTitle: "Convert Images and Text to PDF",
        title: "Convert Images and Text to PDF",
        imageTitle: "Convert Images to PDF",
        textTitle: "Convert Text to PDF",
        textPlaceholder: "Enter your text here...",
        imageButton: "Convert Images to PDF",
        textButton: "Convert Text to PDF",
        proMessageText: "You've reached the maximum attempts. To enable more attempts, please activate PRO.",
        proButton: "Activate PRO - $1"
    },
    hi: {
        pageTitle: "छवियों और टेक्स्ट को PDF में बदलें",
        title: "छवियों और टेक्स्ट को PDF में बदलें",
        imageTitle: "छवियों को PDF में बदलें",
        textTitle: "टेक्स्ट को PDF में बदलें",
        textPlaceholder: "यहां अपना टेक्स्ट दर्ज करें...",
        imageButton: "छवियों को PDF में बदलें",
        textButton: "टेक्स्ट को PDF में बदलें",
        proMessageText: "आपने अधिकतम प्रयास सीमा तक पहुँच लिया है। अधिक प्रयासों को सक्षम करने के लिए कृपया PRO सक्रिय करें।",
        proButton: "PRO सक्रिय करें - $1"
    },
    fr: {
        pageTitle: "Convertir les images et le texte en PDF",
        title: "Convertir les images et le texte en PDF",
        imageTitle: "Convertir les images en PDF",
        textTitle: "Convertir le texte en PDF",
        textPlaceholder: "Entrez votre texte ici...",
        imageButton: "Convertir les images en PDF",
        textButton: "Convertir le texte en PDF",
        proMessageText: "Vous avez atteint la limite maximale d'essais. Pour activer plus d'essais, veuillez activer PRO.",
        proButton: "Activer PRO - 1 $"
    }
};

function chooseLanguage(language) {
    localStorage.setItem("language", language); // حفظ اللغة في التخزين المحلي
    closeLanguageModal();
    changeLanguage(language);
}

function closeLanguageModal() {
    document.getElementById("languageModal").style.display = "none"; // إغلاق نافذة اختيار اللغة
}

function changeLanguage(language) {
    document.getElementById("pageTitle").innerText = translations[language].pageTitle;
    document.getElementById("title").innerText = translations[language].title;
    document.getElementById("imageTitle").innerText = translations[language].imageTitle;
    document.getElementById("textTitle").innerText = translations[language].textTitle;
    document.getElementById("textInput").placeholder = translations[language].textPlaceholder;
    document.getElementById("imageButton").innerText = translations[language].imageButton;
    document.getElementById("textButton").innerText = translations[language].textButton;
    document.getElementById("proMessageText").innerText = translations[language].proMessageText;
    document.getElementById("proButton").innerText = translations[language].proButton;
}

// عند تحميل الصفحة، اختر اللغة المخزنة أو افتح نافذة اختيار اللغة
window.onload = () => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
        changeLanguage(storedLanguage);
    } else {
        document.getElementById("languageModal").style.display = "flex"; // عرض نافذة اللغة
    }
};
