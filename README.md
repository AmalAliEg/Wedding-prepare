# 👰‍♀️ دليل تشغيل وتزامن تطبيق دولاب العروسة (Bridal Wardrobe Tracker)

ألف مبروك مقدماً! 🎉 هذا التطبيق مصمم خصيصاً لمساعدتك على ترتيب وتتبع كل لبس ومشتريات جهاز العروسة بكل سهولة وسرعة وبدون كتابة يدوية مرهقة.

---

## ⚡ كيف تشغلين التطبيق فوراً على جهازك الآن؟

1. التطبيق جاهز ويعمل **فوراً بدون أي إنترنت أو إعدادات إضافية**!
2. كل ما عليكِ فعله هو فتح ملف:
   `C:\Users\DELL\.gemini\antigravity\scratch\wedding-wardrobe\index.html` في أي متصفح (Chrome, Edge, Safari...).
3. أي ملابس تضيفينها تُحفظ تلقائياً في المتصفح الخاص بجهازك، ويمكنك تنزيل نسخة احتياطية من زر 💾 في أي وقت.

---

## ☁️ خطوات تفعيل التزامن السحابي عبر Firebase وحساب Google (بين الموبايل واللابتوب)

إذا أردتِ فتح الصفحة من الموبايل ومن اللابتوب معاً بحيث تظهر نفس الملابس لحظياً، اتبعي هذه الخطوات البسيطة (تأخذ حوالي 3 دقائق):

### 1. إنشاء مشروع Firebase (مجاني 100%)
1. ادخلي على موقع [Firebase Console](https://console.firebase.google.com/) وسجلي بحساب Google الخاص بكِ.
2. اضغطي على **"Add project"** وسمّي المشروع أي اسم (مثلاً: `my-wedding-wardrobe`) ثم اضغطي **Continue**.
3. (اختياري) يمكنك إلغاء Google Analytics ثم الضغط على **Create project**.

### 2. تفعيل قاعدة البيانات (Cloud Firestore)
1. من القائمة الجانبية في Firebase، اختاري **Build** ثم **Firestore Database**.
2. اضغطي على **Create database**.
3. اختاري مكان السيرفر (مثلاً `eur3 - europe-west` أو أي موقع قريب)، ثم اضغطي **Next**.
4. اختاري **Start in production mode** واضغطي **Create**.
5. ادخلي على تبويب **Rules** (القواعد) والصقي هذه القاعدة البسيطة لحماية بياناتك:
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /users/{userId}/{document=**} {
         allow read, write: if request.auth != null && request.auth.uid == userId;
       }
     }
   }
   ```
   ثم اضغطي **Publish**. (هذه القاعدة تضمن أنكِ وحدكِ بحساب Google الخاص بك من يستطيع قراءة أو تعديل الملابس).

### 3. تفعيل تسجيل الدخول بحساب Google (Authentication)
1. من القائمة الجانبية اختاري **Build** ثم **Authentication**.
2. اضغطي على **Get Started**.
3. من قائمة خيارات الدخول، اختاري **Google** واضغطي **Enable**.
4. اختاري بريدك الإلكتروني في خانة Support Email، ثم اضغطي **Save**.

### 4. نسخ كود الربط ولصقه في التطبيق
1. اضغطي على علامة الترس ⚙️ أعلى اليسار بجوار "Project Overview" ثم اختاري **Project settings**.
2. انزلي للأسفل عند قسم **Your apps** واضغطي على علامة الويب `</>`.
3. اكتبي أي اسم للتطبيق (مثلاً: `Wardrobe Web`) واضغطي **Register app**.
4. سيظهر لكِ كود يحتوي على `firebaseConfig`:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSy...",
     authDomain: "my-wedding-wardrobe.firebaseapp.com",
     projectId: "my-wedding-wardrobe",
     storageBucket: "...",
     messagingSenderId: "...",
     appId: "..."
   };
   ```
5. انسخي فقط الجزء الخاص بالـ JSON الذي بين القوسين `{ ... }`.
6. افتحي تطبيق دولاب العروسة في المتصفح، واضغطي على علامة **⚙️ وضع محلي** أعلى اليسار.
7. الصقي الكود في خانة `firebaseConfig JSON` واضغطي **حفظ إعدادات Firebase وتفعيل التزامن**.
8. اضغطي على **تسجيل الدخول بحساب Google**.
9. مبروك! التطبيق الآن متصل بالسحابة 🟢 وستجدين علامة التزامن خضراء.

---

## 🌐 رفع الصفحة على GitHub Pages (لفتحها بلينك مباشر من الموبايل)

1. أنشئي مستودعاً جديداً (New Repository) في حسابك على GitHub، وسمّيه مثلاً `wardrobe`.
2. ارفعي ملفات المجلد `wedding-wardrobe` (`index.html` و `categories-data.js`).
3. ادخلي على **Settings** في المستودع -> اختاري **Pages** من القائمة الجانبية.
4. تحت قسم **Build and deployment**، اختاري `main` branch واضغطي **Save**.
5. بعد دقيقة سيعطيكِ GitHub رابطاً مباشراً (مثل: `https://yourusername.github.io/wardrobe/`).
6. افتحي هذا الرابط من موبايلك وسجلي دخول بحساب جوجل، وستجدين كل الملابس التي سجلتيها على اللابتوب تظهر فوراً على الموبايل!
