(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={dpdpCompliance:{actName:`Digital Personal Data Protection (DPDP) Act, 2023`,version:`2026.1`,dataRegion:`India (AWS ap-south-1 Mumbai)`,grievanceOfficer:{name:`Aakash Verma`,designation:`Data Protection & Grievance Officer`,email:`grievance-officer@freshcart.in`,phone:`+91 11 4982 7100`,address:`Tower B, Cyber City, Sector 24, Gurugram, Haryana 122002, India`,slaHours:48},consentNotice:`Your personal data (delivery address and contact) is collected solely for direct farm vegetable delivery and is never sold to third parties.`,hindiConsentNotice:`आपकी व्यक्तिगत जानकारी (डिलीवरी पता व फोन नंबर) केवल खेत से सीधे सब्जी डिलीवरी के लिए उपयोग की जाती है और कभी किसी तीसरे पक्ष को नहीं बेची जाती।`},deviceIntegrity:{status:`Verified Safe`,isRooted:!1,tlsVersion:`TLS 1.3 / Certificate Pinning Active`,keystore:`Hardware-backed Keystore (AES-256-GCM)`,lastAttestation:`Just now`},limits:{otpExpirySeconds:300,maxOtpResends:3,codCapNewUsers:1500,refundThresholdDualApproval:500}},t=[{id:`usr-1`,name:`Priya Sharma`,email:`priya.sharma@gmail.com`,phone:`+91 98765 43210`,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80`,address:`Flat A-402, Sunrise Enclave, Sector 14, Gurugram`,role:`consumer`,provider:`google`,isVerified:!0},{id:`usr-2`,name:`Aakash Verma`,email:`aakash.v@gmail.com`,phone:`+91 98112 34567`,avatar:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80`,address:`B-12, Palm Grove, DLF Phase 1, Gurugram`,role:`consumer`,provider:`google`,isVerified:!0},{id:`usr-3`,name:`Ramesh Patel`,email:`ramesh.farmer@gmail.com`,phone:`+91 98234 51092`,avatar:`https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80`,address:`Patel Organic Farms, Najafgarh Peri-Urban Zone`,role:`farmer`,provider:`email`,isVerified:!0}],n=[{id:`sess-current`,device:`Google Pixel 8 Pro`,os:`Android 14 · Chrome Mobile`,location:`Gurugram, India`,ip:`49.36.128.42 (Masked)`,isCurrent:!0,lastActive:`Active now`},{id:`sess-ipad`,device:`Apple iPad Air`,os:`iPadOS 17.5 · Safari`,location:`New Delhi, India`,ip:`122.161.44.18 (Masked)`,isCurrent:!1,lastActive:`2 days ago`}],r=[{id:`log-101`,timestamp:`08:12:04 IST`,event:`AUTH_OTP_VERIFIED`,actor:`Consumer (Priya)`,target:`+91 98*** **210`,severity:`info`,detail:`Short-lived JWT issued (15m expiry), refresh token stored in Android Keystore.`},{id:`log-102`,timestamp:`08:14:18 IST`,event:`IDEMPOTENCY_LOCKED`,actor:`Order Service`,target:`Order #FC-9428`,severity:`info`,detail:`Idempotency key ord_idem_9428 locked. Duplication and replay attacks blocked.`},{id:`log-103`,timestamp:`08:14:22 IST`,event:`PAYMENT_TOKENIZED`,actor:`Razorpay Gateway`,target:`tok_upi_7821`,severity:`info`,detail:`Zero card/credential data stored. Gateway token mapped to ledger entry.`},{id:`log-104`,timestamp:`08:20:10 IST`,event:`KYC_ACCESS_AUDIT`,actor:`Admin (System)`,target:`Farmer Ramesh Patel`,severity:`security`,detail:`Signed URL generated with 15-minute expiry for encrypted Aadhaar/Land document.`},{id:`log-105`,timestamp:`08:22:45 IST`,event:`LOCATION_PRIVACY_ACTIVE`,actor:`Rider Service (Amit)`,target:`Order #FC-9428`,severity:`info`,detail:`GPS telemetry streamed over WebSocket strictly during active delivery window.`}],i=[{id:`farmer-1`,name:`Ramesh Patel`,hindiName:`रमेश पटेल`,farmName:`Patel Organic Farms`,hindiFarmName:`पटेल जैविक फार्म`,location:`Khed Village, Peri-Urban Belt`,hindiLocation:`खेड गाँव, पेरी-अर्बन बेल्ट`,distance:`2.4 km`,size:`2.5 Acres`,years:`18 Years`,rating:4.9,reviewCount:142,avatar:`/images/farmer_ramesh.jpg`,banner:`/images/farm_landscape.jpg`,certifications:[`NPOP Organic`,`PGS-India Green`,`Pesticide Free`],bio:`Third-generation natural farmer growing heirloom vegetables with native seeds, Jeevamrut organic manure, and open-well water.`,hindiBio:`तीसरी पीढ़ी के प्राकृतिक किसान जो देशी बीजों, जीवामृत खाद और कुएं के शुद्ध पानी से रसायन-मुक्त सब्जियां उगाते हैं।`,phone:`+91 98234 51092`,isFollowed:!0,badges:[`Harvested Today`,`Zero Chemical`,`Verified Farmer`],kyc:{status:`Admin Approved`,aadhaarMasked:`XXXX-XXXX-9021`,landRecordDoc:`Khasra 7/12 Extract #481-B (2.5 Acres Verified)`,bankMasked:`HDFC Bank ••••4812`,pennyDropStatus:`Verified (₹1.00 credit match)`,approvedBy:`Admin Team (A. Verma)`,signedDocUrl:`https://s3.ap-south-1.amazonaws.com/freshcart-kyc-enc/doc_4819.pdf?exp=900`}},{id:`farmer-2`,name:`Sunita Devi`,hindiName:`सुनीता देवी`,farmName:`Devi Natural Shade-Net Farms`,hindiFarmName:`देवी नेचुरल शेड-नेट फार्म`,location:`Manesar Green Belt`,hindiLocation:`मानेसर ग्रीन बेल्ट`,distance:`4.1 km`,size:`1.8 Acres`,years:`9 Years`,rating:4.8,reviewCount:96,avatar:`/images/farmer_sunita.jpg`,banner:`/images/farm_landscape.jpg`,certifications:[`Jaivik Bharat`,`Zero Residue`,`Drip Irrigated`],bio:`Pioneering woman farmer cultivating tender leafy greens and root vegetables under temperature-controlled shade nets with solar drip irrigation.`,hindiBio:`सोलर ड्रिप सिंचाई और तापमान नियंत्रित शेड-नेट में ताज़ी पत्तेदार व जड़ वाली सब्ज़ियां उगाने वाली अग्रणी महिला किसान।`,phone:`+91 98711 34821`,isFollowed:!1,badges:[`Harvested Today`,`Water Conserving`,`Verified Farmer`],kyc:{status:`Admin Approved`,aadhaarMasked:`XXXX-XXXX-3184`,landRecordDoc:`Panchayat Registry #108-A (1.8 Acres Verified)`,bankMasked:`SBI Agri ••••7721`,pennyDropStatus:`Verified (₹1.00 credit match)`,approvedBy:`Admin Team (A. Verma)`,signedDocUrl:`https://s3.ap-south-1.amazonaws.com/freshcart-kyc-enc/doc_7712.pdf?exp=900`}}],a=[{id:`prod-1`,name:`Desi Palak (Country Spinach)`,hindiName:`देशी पालक (ताज़ा कटी)`,category:`Leafy`,hindiCategory:`पत्तेदार सब्ज़ी`,price:35,mandiPrice:24,unit:`500g bunch`,farmerId:`farmer-1`,freshness:`today`,harvestTime:`Today, 6:15 AM`,batchNo:`FC-892`,stockAvailable:34,image:`/images/veg_spinach.jpg`,growingMethod:`Well-watered with Jeevamrut & neem extract`,hindiGrowingMethod:`कुएं के पानी और जीवामृत व नीम अर्क से सिंचित`,description:`Crisp deep-green leaves harvested at sunrise. Rinsed with fresh well water, highly tender and packed with natural iron and folate.`,hindiDescription:`सुबह की धूप से पहले काटी गई गहरी हरी पालक। कुएं के स्वच्छ पानी से धुली, कोमल और प्राकृतिक आयरन से भरपूर।`},{id:`prod-2`,name:`Country Tomatoes (Desi Tamatar)`,hindiName:`देशी टमाटर (लाल व रसीले)`,category:`Nightshades`,hindiCategory:`सब्ज़ी-फल`,price:42,mandiPrice:28,unit:`1 kg`,farmerId:`farmer-1`,freshness:`today`,harvestTime:`Today, 6:45 AM`,batchNo:`FC-894`,stockAvailable:48,image:`/images/veg_tomatoes.jpg`,growingMethod:`Vine-ripened, open-pollinated heirloom seeds`,hindiGrowingMethod:`बेल पर पके हुए, पारंपरिक देशी बीज`,description:`Sun-ripened on the plant, juicy with an authentic tangy aroma. Free from artificial ripening gas (carbide). Perfect for fresh rasam and curries.`,hindiDescription:`पौधे पर प्राकृतिक रूप से पके, रसीले और खट्टे-मीठे देशी टमाटर। बिना किसी कार्बाइड रसायन के सुरक्षित।`},{id:`prod-3`,name:`Sweet Farm Carrots (Desi Gajar)`,hindiName:`मीठी लाल गाजर (ताज़ी)`,category:`Roots`,hindiCategory:`जड़ वाली सब्ज़ी`,price:45,mandiPrice:32,unit:`500g`,farmerId:`farmer-2`,freshness:`today`,harvestTime:`Today, 7:00 AM`,batchNo:`FC-897`,stockAvailable:26,image:`/images/veg_carrots.jpg`,growingMethod:`Vermicompost raised beds, unbleached`,hindiGrowingMethod:`वर्मीकम्पोस्ट क्यारियां, बिना रासायनिक पॉलिश`,description:`Freshly pulled from soft sandy soil with tender green tops. Sweet, crisp crunch, rich in vitamins without chemical washing.`,hindiDescription:`मुलायम रेतीली मिट्टी से हरी पत्तियों सहित निकाली गई मीठी, कुरकुरी गाजर।`},{id:`prod-4`,name:`Tender Green Bhindi (Ladyfinger)`,hindiName:`कोमल हरी भिंडी (snappy)`,category:`Gourds`,hindiCategory:`फली व गोभी`,price:38,mandiPrice:26,unit:`500g`,farmerId:`farmer-1`,freshness:`today`,harvestTime:`Today, 6:30 AM`,batchNo:`FC-901`,stockAvailable:20,image:`/images/veg_okra.jpg`,growingMethod:`Mulched natural soil, hand-picked`,hindiGrowingMethod:`मल्चिंग युक्त प्राकृतिक मिट्टी, हाथ से तोड़ी गई`,description:`Small, snaps at the tip without fiber. Cooks fast with zero stickiness. Harvested early morning.`,hindiDescription:`छोटू और कोमल भिंडी, जो उंगली से आसानी से टूटती है। बिना रेशे की, झटपट पकने वाली।`},{id:`prod-5`,name:`Pahadi Baby Potatoes (Highland Aloo)`,hindiName:`पहाड़ी आलू (छोटा बेबी आलू)`,category:`Roots`,hindiCategory:`जड़ वाली सब्ज़ी`,price:40,mandiPrice:28,unit:`1 kg`,farmerId:`farmer-2`,freshness:`yesterday`,harvestTime:`Yesterday, 4:30 PM`,batchNo:`FC-879`,stockAvailable:60,image:`/images/veg_potatoes.jpg`,growingMethod:`Natural hill soil, non-cold storage`,hindiGrowingMethod:`पहाड़ी मिट्टी, बिना कोल्ड स्टोरेज का ताज़ा आलू`,description:`Thin-skinned golden potatoes with natural earth dust. Superior earthy taste, directly from the farm cellar, never soaked in storage chemical.`,hindiDescription:`पतले छिलके वाला सुनहरा पहाड़ी आलू। बिना किसी कोल्ड-स्टोरेज रसायन के प्राकृतिक स्वाद।`}],o=[{id:`slot-1`,title:`Tomorrow Morning: 7:00 AM – 9:00 AM`,tag:`Most Popular`,available:!0},{id:`slot-2`,title:`Tomorrow Evening: 5:00 PM – 7:00 PM`,tag:`Fresh Harvest`,available:!0},{id:`slot-3`,title:`Today Evening: 5:30 PM – 7:30 PM`,tag:`Last 4 Slots`,available:!0}],s=[{id:`FC-9428`,placedAt:`Today, 07:12 AM`,slot:`Today, 9:00 AM – 11:00 AM`,farmerId:`farmer-1`,farmerName:`Ramesh Patel`,farmerPhone:`+91 98234 ••••2`,farmerPhoneRaw:`+91 98234 51092`,riderName:`Amit Kumar`,riderVehicle:`Hero EV · DL 03 AX 4812`,riderPhone:`+91 98102 ••••1`,riderPhoneRaw:`+91 98102 99401`,customerName:`Priya Sharma`,customerPhone:`+91 98765 ••••0`,customerPhoneRaw:`+91 98765 43210`,deliveryOtp:`4829`,status:`out_for_delivery`,statusStep:4,idempotencyKey:`fc_ord_idem_9428_892a01`,items:[{name:`Desi Palak (Country Spinach)`,qty:1,unit:`500g bunch`,price:35},{name:`Country Tomatoes (Desi Tamatar)`,qty:2,unit:`1 kg`,price:42},{name:`Tender Green Bhindi`,qty:1,unit:`500g`,price:38}],bill:{subtotal:157,deliveryFee:20,farmerSupportFee:10,packagingFee:0,total:187},paymentMode:`UPI (Tokenized via Razorpay Gateway)`,gatewayRef:`pay_token_98129481`,deliveryAddress:`Flat A-402, Sunrise Enclave, Sector 14, Peri-Urban Hub`,timeline:[{step:`Order Placed`,time:`07:12 AM`,done:!0,desc:`Received & signed order token verified`},{step:`Order Accepted`,time:`07:14 AM`,done:!0,desc:`Farmer confirmed harvest availability`},{step:`Freshly Packed`,time:`07:38 AM`,done:!0,desc:`Packed at Patel Organic Farms with bio-bag`},{step:`Out for Delivery`,time:`07:55 AM`,done:!0,current:!0,desc:`Rider Amit Kumar en route. Live GPS location active.`},{step:`Delivered`,time:`Expected 08:35 AM`,done:!1,desc:`Will deliver at your doorstep upon OTP 4829`}]}],c={en:{appTitle:`FreshCart`,tagline:`Farm-Fresh Vegetables in 15-25 Mins`,taglineSub:`Picked fresh at dawn from verified local organic farms`,location:`Deliver to: Sunrise Enclave, Sector 14`,greeting:`Namaste, Priya`,searchPlaceholder:`Search fresh spinach, tomatoes, farmer...`,nearbyFarms:`Nearby Verified Farms`,viewAllFarms:`View All`,todaysHarvest:`Today's Harvest`,todaysHarvestSub:`Vegetables picked within the last few hours`,allCategories:`All`,leafy:`Leafy Greens`,roots:`Roots & Tubers`,nightshades:`Nightshades`,gourds:`Gourds & Pods`,pickedToday:`Picked Today`,pickedYesterday:`Picked Yesterday`,add:`ADD`,added:`ADDED`,viewBasket:`View Basket`,navHome:`Home`,navBrowse:`Browse`,navCart:`Cart`,navOrders:`Orders`,navProfile:`Profile`,farmProfile:`Farmer Profile`,visitFarm:`Visit Farm`,acres:`Acres`,yearsFarming:`Years Farming`,harvestTime:`Harvest Time`,batchTraceability:`Batch Traceability & Soil Notes`,addToCart:`Add to Basket`,cartTitle:`Your Fresh Basket`,emptyCartMsg:`Your basket is currently empty. Explore today’s morning harvest!`,browseHarvestBtn:`Browse Today’s Harvest`,stockReservedBanner:`Stock reserved for you for 10 minutes from farm inventory`,selectSlot:`Select Delivery Slot`,billDetails:`Itemized Transparent Bill`,subtotal:`Produce Subtotal`,deliveryFee:`Direct Delivery Fee`,farmerSupportFee:`Farmer Direct Support Fee`,packagingFee:`Eco Crate & Bagging`,free:`FREE`,grandTotal:`Total Payable`,paymentMethod:`Choose Payment Method`,payUpi:`UPI (GPay / PhonePe / Paytm)`,payCod:`Cash on Delivery (COD)`,payCard:`Card / Net Banking`,placeOrder:`Place Farm-Fresh Order`,orderTrackingTitle:`Live Delivery Tracking`,eta:`Estimated Arrival`,callFarmer:`Call Farmer`,callRider:`Call Delivery Partner`,shareOtpMsg:`Share Delivery OTP with rider upon arrival`,reportIssue:`Report an issue within 24h for instant refund/replacement`,farmerModeSwitch:`Farmer Mode`,consumerModeSwitch:`Consumer Mode`,offlineNotice:`Offline ready — actions sync automatically when connection restores`,acceptOrder:`Accept Order`,markPacked:`Mark Packed`,handoverRider:`Handover to Rider`,addHarvestBtn:`+ Add Today’s Harvest`,farmerDashboard:`Farmer Dashboard`,activeBatches:`Active Harvest Batches`,earningsToday:`Today’s Earnings`,weeklyEarnings:`Weekly Total`,payoutNote:`Next direct bank settlement: Tuesday`,mandiComparison:`vs Mandi Price`,upliftNote:`You earn 25-35% more directly with Freshcart`,securityCenter:`Security & Privacy Center`,dpdpConsentTitle:`DPDP Act 2023 Consent & Privacy`,securityIntegrityBadge:`Hardware Keystore AES-256 · Unrooted · TLS 1.3`,downloadDataBtn:`Download My Data (JSON)`,requestErasureBtn:`Request Account & Data Erasure`,activeSessionsTitle:`Active Login Sessions`,signOutOtherDevices:`Sign Out Other Devices`,auditLogsTitle:`Immutable Security Audit Trail`,authTitleLogin:`Log In to Freshcart`,authTitleRegister:`Create Freshcart Account`,authSubLogin:`Access 100% farm-traceable fresh harvest delivered at dawn`,authSubRegister:`Connect directly with local vegetable farmers at transparent prices`,continueWithGoogle:`Continue with Google`,orContinueWith:`or continue with phone / email`,emailOrPhoneLabel:`Email or Mobile Number (+91)`,passwordLabel:`Password`,rememberMeLabel:`Remember this device (Keystore Token)`,forgotPasswordLabel:`Forgot Password?`,loginSubmitBtn:`Log In to Freshcart`,signUpSubmitBtn:`Create Account & Start Ordering`,switchRegisterPrompt:`Don't have an account?`,switchRegisterAction:`Sign Up`,switchLoginPrompt:`Already have an account?`,switchLoginAction:`Log In`,fullNameLabel:`Full Name`,emailLabel:`Email Address`,phoneLabel:`Mobile Number (+91)`,addressLabel:`Delivery Address & Locality`,userTypeLabel:`I want to register as:`,roleConsumerOption:`🥬 Household Vegetable Buyer`,roleFarmerOption:`🌾 Local Organic Farmer`,dpdpAuthConsent:`I consent to DPDP Act 2023 compliant data handling for farm deliveries`,oneTapGoogle:`Fast & Secure 1-Tap Google Sign-In`,googleVerifiedAccount:`Verified with Google Identity`,signOutBtn:`Sign Out / Switch Account`},hi:{appTitle:`फ्रेशकार्ट (FreshCart)`,tagline:`खेत से सीधे 15-25 मिनट में ताज़ी डिलीवरी`,taglineSub:`आज सुबह खेत से तोड़ी गई 100% ताज़ी व प्रमाणित सब्ज़ियाँ`,location:`डिलीवरी पता: सनराइज एन्क्लेव, सेक्टर 14`,greeting:`नमस्ते, प्रिया जी`,searchPlaceholder:`पालक, देशी टमाटर या किसान खोजें...`,nearbyFarms:`आस-पास के प्रमाणित खेत`,viewAllFarms:`सभी देखें`,todaysHarvest:`आज की ताज़ा कटाई`,todaysHarvestSub:`आज सुबह खेत से सीधे तोड़ी गई ताज़ी सब्ज़ियाँ`,allCategories:`सभी`,leafy:`पत्तेदार सब्ज़ियां`,roots:`कंद-मूल (जड़ें)`,nightshades:`टमाटर-बैंगन`,gourds:`भिंडी व फलियां`,pickedToday:`आज तोड़ी गई`,pickedYesterday:`कल तोड़ी गई`,add:`जोड़ें`,added:`जुड़ा`,viewBasket:`टोकरी देखें`,navHome:`होम`,navBrowse:`खोजें`,navCart:`टोकरी`,navOrders:`ऑर्डर`,navProfile:`प्रोफ़ाइल`,farmProfile:`किसान की जानकारी`,visitFarm:`खेत देखें`,acres:`एकड़ खेत`,yearsFarming:`खेती का अनुभव`,harvestTime:`तोड़ने का समय`,batchTraceability:`बैच शुद्धता व खाद विवरण`,addToCart:`टोकरी में डालें`,cartTitle:`आपकी ताज़ा टोकरी`,emptyCartMsg:`आपकी टोकरी खाली है। आज की ताज़ा कटाई देखें!`,browseHarvestBtn:`आज की कटाई देखें`,stockReservedBanner:`खेत से 10 मिनट के लिए स्टॉक आपके नाम आरक्षित है`,selectSlot:`डिलीवरी का समय चुनें`,billDetails:`पारदर्शी बिल का विवरण`,subtotal:`सब्जियों का मूल्य`,deliveryFee:`डिलीवरी शुल्क`,farmerSupportFee:`किसान संवर्धन शुल्क`,packagingFee:`इको फ्रेंडली पैकिंग`,free:`निःशुल्क`,grandTotal:`कुल देय राशि`,paymentMethod:`भुगतान का तरीका`,payUpi:`यूपीआई (GPay / PhonePe / Paytm)`,payCod:`कैश ऑन डिलीवरी (COD)`,payCard:`कार्ड / नेट बैंकिंग`,placeOrder:`ऑर्डर पक्का करें`,orderTrackingTitle:`लाइव डिलीवरी ट्रैकिंग`,eta:`अनुमानित समय`,callFarmer:`किसान को कॉल करें`,callRider:`राइडर को कॉल करें`,shareOtpMsg:`डिलीवरी के समय राइडर को यह OTP बताएं`,reportIssue:`24 घंटे के भीतर किसी भी शिकायत पर तुरंत समाधान या रिफंड`,farmerModeSwitch:`किसान ऐप मोड`,consumerModeSwitch:`ग्राहक ऐप मोड`,offlineNotice:`ऑफ़लाइन सक्षम — नेटवर्क आते ही बदलाव अपने आप सिंक होंगे`,acceptOrder:`ऑर्डर स्वीकार करें`,markPacked:`पैक किया गया`,handoverRider:`राइडर को सौंपा`,addHarvestBtn:`+ आज की कटाई जोड़ें`,farmerDashboard:`किसान डैशबोर्ड`,activeBatches:`सक्रिय कटाई स्टॉक`,earningsToday:`आज की कमाई`,weeklyEarnings:`इस सप्ताह की कमाई`,payoutNote:`बैंक खाते में अगला भुगतान: मंगलवार`,mandiComparison:`मंडी भाव से तुलना`,upliftNote:`फ़्रेशकार्ट पर सीधे बेचने से 25-35% अधिक आय`,securityCenter:`सुरक्षा व गोपनीयता केंद्र`,dpdpConsentTitle:`डीपीडीपी अधिनियम 2023 सहमति व गोपनीयता`,securityIntegrityBadge:`हार्डवेयर की-स्टोर AES-256 · सुरक्षित व अनरूटेड · TLS 1.3`,downloadDataBtn:`मेरा डेटा डाउनलोड करें (JSON)`,requestErasureBtn:`खाता व डेटा हटाने का अनुरोध`,activeSessionsTitle:`सक्रिय लॉगिन सत्र`,signOutOtherDevices:`अन्य डिवाइस से लॉगआउट करें`,auditLogsTitle:`अपरिवर्तनीय सुरक्षा ऑडिट ट्रेल`,authTitleLogin:`फ़्रेशकार्ट में लॉग इन करें`,authTitleRegister:`नया फ़्रेशकार्ट खाता बनाएं`,authSubLogin:`खेत से सीधी ताज़ा डिलीवरी प्राप्त करने के लिए जुड़े`,authSubRegister:`प्रमाणित स्थानीय किसानों से सीधे जुड़ने के लिए पंजीकरण करें`,continueWithGoogle:`Google के साथ आगे बढ़ें`,orContinueWith:`या फोन व ईमेल द्वारा`,emailOrPhoneLabel:`ईमेल या मोबाइल नंबर (+91)`,passwordLabel:`पासवर्ड`,rememberMeLabel:`इस डिवाइस पर याद रखें (की-स्टोर टोकन)`,forgotPasswordLabel:`पासवर्ड भूल गए?`,loginSubmitBtn:`फ़्रेशकार्ट में लॉग इन करें`,signUpSubmitBtn:`खाता बनाएं व ऑर्डर शुरू करें`,switchRegisterPrompt:`खाता नहीं है?`,switchRegisterAction:`साइन अप करें`,switchLoginPrompt:`पहले से खाता है?`,switchLoginAction:`लॉग इन करें`,fullNameLabel:`पूरा नाम`,emailLabel:`ईमेल पता`,phoneLabel:`मोबाइल नंबर (+91)`,addressLabel:`डिलीवरी का पता व इलाका`,userTypeLabel:`पंजीकरण का प्रकार:`,roleConsumerOption:`🥬 ताज़ी सब्ज़ी खरीदार (उपभोक्ता)`,roleFarmerOption:`🌾 स्थानीय जैविक किसान`,dpdpAuthConsent:`मैं खेत डिलीवरी के लिए डीपीडीपी 2023 गोपनीयता शर्तों से सहमत हूँ`,oneTapGoogle:`सुरक्षित 1-क्लिक Google साइन-इन`,googleVerifiedAccount:`Google पहचान द्वारा सत्यापित`,signOutBtn:`लॉगआउट व खाता बदलें`}},l={role:`consumer`,farmerTab:`today`,adminTab:`audit`,currentTab:`home`,lang:`en`,frameMode:`normal`,farmers:JSON.parse(JSON.stringify(i)),products:JSON.parse(JSON.stringify(a)),orders:JSON.parse(JSON.stringify(s)),slots:JSON.parse(JSON.stringify(o)),sessions:JSON.parse(JSON.stringify(n)),auditLogs:JSON.parse(JSON.stringify(r)),securityConfig:e,users:JSON.parse(JSON.stringify(t)),currentUser:JSON.parse(JSON.stringify(t[0])),authMode:`login`,isPasswordVisible:!1,isGoogleModalOpen:!1,isGoogleLoading:!1,googleLoadingStep:``,authReturnTab:`home`,regRole:`consumer`,rememberMe:!0,customGoogleInputOpen:!1,cart:{"prod-1":1,"prod-2":2},selectedSlotId:`slot-1`,paymentMode:`upi`,dpdpConsent:!0,searchQuery:``,selectedCategory:`all`,activeProductModal:null,activeFarmerModal:null,isAddHarvestOpen:!1,isReportIssueOpen:!1,isKycModalOpen:!1,selectedKycFarmer:null,isOtpModalOpen:!1,otpCountdown:300,toastMessage:null,riderOtpInput:``,newHarvest:{name:`Desi Palak (Country Spinach)`,category:`Leafy`,qty:30,price:35,unit:`500g bunch`,image:`/images/veg_spinach.jpg`}};function u(e,t=20,n=``){return{home:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,search:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,shoppingBag:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,package:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,user:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,mapPin:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,chevronRight:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,chevronDown:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`,check:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,close:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,shieldCheck:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>`,phone:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,leaf:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`,clock:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,sun:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`,truck:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,smartphone:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>`,maximize:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M21 8V5a2 2 0 0 0-2-2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/><path d="M16 21h3a2 2 0 0 0 2-2v-3"/></svg>`,plus:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>`,lock:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,key:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="7.5" cy="15.5" r="5.5"/><path d="m21 2-9.6 9.6"/><path d="m15.5 7.5 3 3L22 7l-3-3"/></svg>`,fileText:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>`,download:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,trendingUp:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,google:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>`,mail:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,eye:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,eyeOff:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`,arrowLeft:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,userPlus:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" x2="19" y1="8" y2="14"/><line x1="22" x2="16" y1="11" y2="11"/></svg>`,logOut:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,logIn:`<svg class="${n}" width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>`}[e]||``}function d(e){return c[l.lang][e]||e}function f(e,t,n,r,i){let a={id:`log-${Date.now()}`,timestamp:new Date().toLocaleTimeString(`en-US`,{hour12:!1})+` IST`,event:e,actor:t,target:n,severity:r,detail:i};l.auditLogs.unshift(a)}function p(){let e=0,t=0,n=[];for(let[r,i]of Object.entries(l.cart))if(i>0){let a=l.products.find(e=>e.id===r);a&&(e+=a.price*i,t+=i,n.push({product:a,qty:i}))}let r=t>0?20:0,i=t>0?10:0,a=e+r+i;return{subtotal:e,deliveryFee:r,farmerSupportFee:i,packagingFee:0,total:a,itemCount:t,items:n}}function m(e){l.toastMessage=e,B(),setTimeout(()=>{l.toastMessage===e&&(l.toastMessage=null,B())},3200)}function h(){return`
    <div class="proto-top-bar">
      <div class="proto-brand">
        <img src="/images/logo.jpg" alt="FreshCart" class="proto-brand-logo" />
        <div>
          <div class="proto-brand-title">FreshCart</div>
          <div class="proto-brand-subtitle">${d(`tagline`)}</div>
        </div>
      </div>

      <div class="proto-controls">
        <!-- 4-Way RBAC Role Switcher (Section 5.2) -->
        <div class="role-pill">
          <button class="${l.role===`consumer`?`active`:``}" id="btn-role-consumer" title="Consumer Role">
            👤 Priya (Buyer)
          </button>
          <button class="${l.role===`farmer`?`active`:``}" id="btn-role-farmer" title="Farmer Role">
            🌾 Ramesh (Farmer)
          </button>
          <button class="${l.role===`rider`?`active`:``}" id="btn-role-rider" title="Rider Role">
            🛵 Amit (Rider)
          </button>
          <button class="${l.role===`admin`?`active`:``}" id="btn-role-admin" title="Admin & Security Role">
            🛡️ Security / Admin
          </button>
        </div>

        <!-- Language Switcher -->
        <button class="proto-btn" id="btn-toggle-lang" title="Switch Language">
          🌐 ${l.lang===`en`?`English`:`हिंदी`}
        </button>

        <!-- User Authentication & Google Status -->
        <button class="proto-user-btn" id="proto-auth-btn" title="Open Sign In / Login Page">
          ${l.currentUser?(l.currentUser.provider===`google`?u(`google`,14):u(`user`,14))+` `+l.currentUser.name.split(` `)[0]:u(`logIn`,14)+` Sign In / Login`}
        </button>

        <!-- Device Size Toggle -->
        <button class="proto-btn" id="btn-toggle-device" title="Toggle Bezel Mode">
          ${l.frameMode===`normal`?u(`maximize`,14)+` Expand`:u(`smartphone`,14)+` Phone`}
        </button>

        <!-- Simulation Step Action -->
        ${l.role===`consumer`?`
          <button class="proto-btn active" id="btn-sim-order-step" title="Simulate real-time delivery state">
            ⚡ Advance Order
          </button>
        `:l.role===`farmer`?`
          <button class="proto-btn active" id="btn-farmer-add-harvest" title="Add Today's Morning Harvest">
            ${u(`plus`,14)} Add Harvest
          </button>
        `:l.role===`rider`?`
          <button class="proto-btn active" id="btn-rider-sim-progress" title="Simulate Rider Arrival">
            🛵 Arrived at Door
          </button>
        `:`
          <button class="proto-btn active" id="btn-admin-certin" title="CERT-In Compliance Check">
            ✓ CERT-In 6h SLA
          </button>
        `}
      </div>
    </div>
  `}function g(){return`
    <header class="consumer-header">
      <!-- VeggiFresh Express Delivery Chip -->
      <div class="veggi-delivery-chip">
        <span class="veggi-pulse-dot"></span>
        <span>⚡ 15-25 MINS EXPRESS</span>
      </div>

      <div class="header-top-row">
        <div class="header-location-box" id="header-loc-trigger">
          <div class="header-location-icon">
            ${u(`mapPin`,18)}
          </div>
          <div class="header-location-text">
            <div class="location-label">${l.lang===`en`?`Delivering to`:`डिलीवरी पता`}</div>
            <div class="location-address">
              ${l.currentUser?.address?l.currentUser.address.split(`,`)[0]:`Sunrise Enclave, Sec 14`} ${u(`chevronDown`,13)}
            </div>
          </div>
        </div>

        <div style="display:flex; align-items:center; gap:8px;">
          <!-- User / Auth Button -->
          <button class="header-auth-pill" id="header-auth-trigger" title="${l.currentUser?`Account & Profile`:`Sign In / Login`}">
            ${l.currentUser?`
              <img src="${l.currentUser.avatar}" alt="${l.currentUser.name}" class="header-user-avatar" />
              <span>${l.currentUser.name.split(` `)[0]}</span>
              ${l.currentUser.provider===`google`?`<span class="google-dot" title="Signed in with Google"></span>`:``}
            `:`
              ${u(`user`,14)}
              <span>${l.lang===`en`?`Sign In`:`लॉग इन`}</span>
            `}
          </button>

          <button class="lang-switch-btn" id="header-lang-btn">
            ${l.lang===`en`?`अ/A हिंदी`:`A/अ EN`}
          </button>
        </div>
      </div>

      <div class="header-greeting-row">
        <div class="greeting-text">
          <div class="veggi-brand-pill">🥦 FreshCart • 100% Farm Fresh</div>
          <h1>${l.currentUser?l.lang===`en`?`Namaste, ${l.currentUser.name.split(` `)[0]}`:`नमस्ते, ${l.currentUser.name.split(` `)[0]} जी`:l.lang===`en`?`Namaste, Guest`:`नमस्ते, अतिथि`}</h1>
          <div class="greeting-tagline">${d(`taglineSub`)}</div>
        </div>
      </div>

      <div class="header-search-bar">
        ${u(`search`,18)}
        <input 
          type="text" 
          id="search-input" 
          placeholder="${d(`searchPlaceholder`)}" 
          value="${l.searchQuery}"
        />
        ${l.searchQuery?`
          <button id="clear-search" style="background:none;border:none;cursor:pointer;color:var(--ink-muted)">
            ${u(`close`,14)}
          </button>
        `:``}
      </div>
    </header>
  `}function _(){return`
    <div class="veggi-promo-slider">
      <div class="veggi-promo-card emerald" data-promo="flash">
        <div>
          <span class="promo-card-tag">🌱 ${l.lang===`en`?`HARVEST FLASH SALE`:`सुबह की ताज़ा सेल`}</span>
          <div class="promo-card-title">${l.lang===`en`?`Flat 35% OFF on Today's Harvest`:`आज की ताज़ा कटाई पर 35% छूट`}</div>
          <div class="promo-card-desc">${l.lang===`en`?`Zero cold storage · Picked at 5:30 AM today`:`बिना कोल्ड स्टोरेज · सुबह 5:30 बजे ताज़ी कटी`}</div>
        </div>
        <div class="promo-card-bottom">
          <span>${l.lang===`en`?`Use Code:`:`कोड:`} <strong class="promo-code-badge">FRESH35</strong></span>
          <span>${l.lang===`en`?`Claim Deal ➔`:`ऑफ़र लें ➔`}</span>
        </div>
      </div>

      <div class="veggi-promo-card amber" data-promo="express">
        <div>
          <span class="promo-card-tag">⚡ ${l.lang===`en`?`ULTRA EXPRESS`:`अल्ट्रा एक्सप्रेस`}</span>
          <div class="promo-card-title">${l.lang===`en`?`15-25 Mins Free Delivery`:`15-25 मिनट में मुफ्त डिलीवरी`}</div>
          <div class="promo-card-desc">${l.lang===`en`?`On all vegetable orders above ₹149`:`₹149 से ऊपर के सभी ऑर्डर पर`}</div>
        </div>
        <div class="promo-card-bottom">
          <span>${l.lang===`en`?`Eco-friendly EV Courier`:`पर्यावरण-हितैषी ईवी`}</span>
          <span>${l.lang===`en`?`Fast Slots ➔`:`स्लॉट देखें ➔`}</span>
        </div>
      </div>

      <div class="veggi-promo-card teal" data-promo="direct">
        <div>
          <span class="promo-card-tag">🛡️ ${l.lang===`en`?`DIRECT TO FARMER`:`सीधे किसान से`}</span>
          <div class="promo-card-title">${l.lang===`en`?`100% Direct MSP Payout`:`किसान को 100% सीधा भुगतान`}</div>
          <div class="promo-card-desc">${l.lang===`en`?`DPDP 2023 protected & bank penny-drop verified`:`डीपीडीपी 2023 संरक्षित व बैंक सत्यापित`}</div>
        </div>
        <div class="promo-card-bottom">
          <span>${l.lang===`en`?`Zero Middlemen`:`शून्य बिचौलिए`}</span>
          <span>${l.lang===`en`?`Explore Farms ➔`:`किसान देखें ➔`}</span>
        </div>
      </div>
    </div>
  `}function v(){return`
    <div class="freshness-banner-ribbon">
      <div class="ribbon-icon">
        ${u(`leaf`,18)}
      </div>
      <div class="ribbon-text">
        <strong>${l.lang===`en`?`Direct Farm Transparency & Security`:`सीधे खेत से पारदर्शिता व सुरक्षा`}</strong>
        ${l.lang===`en`?`Harvested today at dawn. 100% direct payment to farmers with bank penny-drop verification. DPDP 2023 protected.`:`आज सुबह की ताज़ा कटाई। बैंक पेनी-ड्रॉप से सत्यापित किसान। डीपीडीपी 2023 अधिनियम से पूरी तरह सुरक्षित।`}
      </div>
    </div>
  `}function y(){return`
    <div class="section-header">
      <div>
        <h2>${d(`nearbyFarms`)}</h2>
        <div class="subtext">${l.lang===`en`?`Within 5 km radius of your location`:`आपके स्थान से 5 किमी के भीतर`}</div>
      </div>
    </div>

    <div class="farms-scroll-row">
      ${l.farmers.map(e=>`
        <div class="farm-card" data-farmer-id="${e.id}">
          <div class="farm-card-top">
            <img src="${e.avatar}" alt="${e.name}" class="farm-avatar" />
            <div class="farm-info">
              <h3>${l.lang===`en`?e.name:e.hindiName}</h3>
              <div class="farm-sub">${l.lang===`en`?e.farmName:e.hindiFarmName}</div>
              <div class="farm-sub">📍 ${e.distance} · ${e.size}</div>
            </div>
          </div>
          <div class="farm-trust-row">
            <span class="farm-rating-badge">★ ${e.rating}</span>
            <span class="farm-trust-badge">${u(`shieldCheck`,12)} ${e.certifications[0]}</span>
            <span class="penny-drop-badge">${u(`check`,10)} KYC Verified</span>
          </div>
        </div>
      `).join(``)}
    </div>
  `}function b(){return`
    <div class="veggi-categories-rail">
      ${[{id:`all`,emoji:`🥦`,label:d(`allCategories`)},{id:`Leafy`,emoji:`🥬`,label:d(`leafy`)},{id:`Nightshades`,emoji:`🍅`,label:d(`nightshades`)},{id:`Roots`,emoji:`🥕`,label:d(`roots`)},{id:`Gourds`,emoji:`🥒`,label:d(`gourds`)}].map(e=>`
        <button 
          class="veggi-cat-item ${l.selectedCategory===e.id?`active`:``}" 
          data-cat="${e.id}"
          title="${e.label}"
        >
          <div class="veggi-cat-circle">${e.emoji}</div>
          <span class="veggi-cat-title">${e.label}</span>
        </button>
      `).join(``)}
    </div>
  `}function x(){let e=l.products;if(l.searchQuery.trim()){let t=l.searchQuery.toLowerCase();e=e.filter(e=>e.name.toLowerCase().includes(t)||e.hindiName.includes(t)||e.category.toLowerCase().includes(t))}return l.selectedCategory!==`all`&&(e=e.filter(e=>e.category===l.selectedCategory)),e.length===0?`
      <div class="empty-state">
        <div class="empty-state-icon">${u(`search`,32)}</div>
        <h3>${l.lang===`en`?`No vegetables found`:`कोई सब्ज़ी नहीं मिली`}</h3>
        <p style="font-size:12px; color:var(--ink-soft)">
          ${l.lang===`en`?`Try searching for spinach, tomatoes or switch category`:`पालक या देशी टमाटर खोजें`}
        </p>
      </div>
    `:`
    <div class="section-header" style="padding-top:8px;">
      <div>
        <h2>${d(`todaysHarvest`)}</h2>
        <div class="subtext">${d(`todaysHarvestSub`)}</div>
      </div>
      <span class="section-action">${e.length} ${l.lang===`en`?`Available`:`उपलब्ध`}</span>
    </div>

    <div class="products-grid">
      ${e.map(e=>{let t=l.farmers.find(t=>t.id===e.farmerId)||l.farmers[0],n=l.cart[e.id]||0,r=e.freshness===`today`,i=Math.round(e.price*1.34),a=Math.round((i-e.price)/i*100);return`
          <div class="product-card" data-product-id="${e.id}">
            <div class="product-card-thumb-wrap">
              <span class="discount-pill">${a}% OFF</span>
              <img src="${e.image}" alt="${e.name}" class="product-card-thumb" loading="lazy" />
              <div class="freshness-stamp ${r?`today`:`yesterday`}">
                ${u(`clock`,11)} ${d(r?`pickedToday`:`pickedYesterday`)}
              </div>
            </div>

            <div class="product-card-body">
              <div>
                <div class="product-title">${l.lang===`en`?e.name:e.hindiName}</div>
                <div class="product-farmer-name">
                  🌾 ${l.lang===`en`?t.name:t.hindiName} · ${t.distance}
                </div>
                <span class="product-savings-badge">
                  Save ₹${i-e.price} vs Mandi
                </span>
              </div>

              <div class="product-card-footer">
                <div class="product-price-box">
                  <div class="product-price-row">
                    <span class="product-price">₹${e.price}</span>
                    <span class="product-mandi-strike">₹${i}</span>
                  </div>
                  <span class="product-unit">/${e.unit}</span>
                </div>

                <div class="product-action-wrap" onclick="event.stopPropagation()">
                  ${n===0?`
                    <button class="btn-add-item" data-add-prod="${e.id}">
                      ${d(`add`)} +
                    </button>
                  `:`
                    <div class="mini-stepper">
                      <button data-dec-prod="${e.id}">−</button>
                      <span>${n}</span>
                      <button data-inc-prod="${e.id}">+</button>
                    </div>
                  `}
                </div>
              </div>
            </div>
          </div>
        `}).join(``)}
    </div>
  `}function S(){let{total:e,itemCount:t}=p();return t===0||l.currentTab===`cart`?``:`
    <div class="floating-basket-bar" id="floating-basket-trigger">
      <div class="floating-basket-left">
        <span class="basket-count-chip">${t} ${l.lang===`en`?`items`:`वस्तुएं`}</span>
        <span class="floating-basket-price">₹${e}</span>
      </div>
      <div class="floating-basket-right">
        <span>${d(`viewBasket`)}</span>
        ${u(`chevronRight`,16)}
      </div>
    </div>
  `}function C(){let{subtotal:e,deliveryFee:t,farmerSupportFee:n,packagingFee:r,total:i,itemCount:a,items:o}=p();if(a===0)return`
      <div class="cart-screen-view">
        <h2 class="cart-header-title">${d(`cartTitle`)}</h2>
        <div class="empty-state" style="margin-top: 40px;">
          <div class="empty-state-icon">
            ${u(`shoppingBag`,36)}
          </div>
          <h3 style="font-family:var(--font-serif); font-size:18px;">${d(`emptyCartMsg`)}</h3>
          <p style="font-size:12px; color:var(--ink-soft); max-width: 260px;">
            ${l.lang===`en`?`Vegetables are reserved directly from morning farm harvest with zero middlemen.`:`सीधे किसान से सुबह की ताज़ा कटाई बुक करें।`}
          </p>
          <button class="btn-primary" id="btn-cart-browse" style="margin-top: 10px;">
            ${d(`browseHarvestBtn`)}
          </button>
        </div>
      </div>
    `;let s={};return o.forEach(({product:e,qty:t})=>{s[e.farmerId]||(s[e.farmerId]=[]),s[e.farmerId].push({product:e,qty:t})}),`
    <div class="cart-screen-view">
      <h2 class="cart-header-title">${d(`cartTitle`)} (${a})</h2>

      <!-- 10-Minute Reservation Guarantee Banner -->
      <div class="reservation-timer-chip">
        ${u(`clock`,16)}
        <span>${d(`stockReservedBanner`)} (9:42 mins left)</span>
      </div>

      <!-- Items Grouped By Farmer -->
      ${Object.entries(s).map(([e,t])=>{let n=l.farmers.find(t=>t.id===e)||l.farmers[0];return`
          <div class="farmer-cart-group">
            <div class="cart-group-header">
              <img src="${n.avatar}" alt="${n.name}" />
              <div>
                <strong style="font-size:13px; color:var(--forest);">${l.lang===`en`?n.farmName:n.hindiFarmName}</strong>
                <div style="font-size:11px; color:var(--ink-soft);">🌾 ${n.name} · ${n.distance}</div>
              </div>
            </div>

            ${t.map(({product:e,qty:t})=>`
              <div class="cart-item-row">
                <div class="cart-item-info">
                  <div class="cart-item-name">${l.lang===`en`?e.name:e.hindiName}</div>
                  <div class="cart-item-price-unit">₹${e.price} / ${e.unit} · <span style="color:var(--forest); font-weight:600;">${e.harvestTime}</span></div>
                </div>

                <div class="mini-stepper">
                  <button data-dec-prod="${e.id}">−</button>
                  <span>${t}</span>
                  <button data-inc-prod="${e.id}">+</button>
                </div>
              </div>
            `).join(``)}
          </div>
        `}).join(``)}

      <!-- Delivery Slot Selection -->
      <div class="slot-select-card">
        <h4>${u(`truck`,16)} ${d(`selectSlot`)}</h4>
        <div class="slot-chips-list">
          ${l.slots.map(e=>`
            <div 
              class="slot-chip ${l.selectedSlotId===e.id?`selected`:``}" 
              data-slot-id="${e.id}"
            >
              <span>${e.title}</span>
              <span class="slot-tag">${e.tag}</span>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- Itemized Transparent Bill (PRD FR-4.2 & Security Sec 8: Server-side calculated) -->
      <div class="bill-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <h4>${d(`billDetails`)}</h4>
          <span class="penny-drop-badge">${u(`lock`,10)} Server Calculated</span>
        </div>
        <div class="bill-row">
          <span>${d(`subtotal`)}</span>
          <span>₹${e}</span>
        </div>
        <div class="bill-row">
          <span>${d(`deliveryFee`)} (Farm to Doorstep)</span>
          <span>₹${t}</span>
        </div>
        <div class="bill-row">
          <span>${d(`farmerSupportFee`)} (100% to Ramesh/Sunita)</span>
          <span>₹${n}</span>
        </div>
        <div class="bill-row">
          <span>${d(`packagingFee`)}</span>
          <span style="color:var(--forest); font-weight:700;">${d(`free`)}</span>
        </div>
        <div class="bill-row total">
          <span>${d(`grandTotal`)}</span>
          <span>₹${i}</span>
        </div>
      </div>

      <!-- Payment Method Selection (PCI-DSS Gateway Tokenized - Sec 8) -->
      <div class="slot-select-card">
        <h4>${d(`paymentMethod`)}</h4>
        <div class="payment-selector">
          <label class="pay-radio-opt ${l.paymentMode===`upi`?`selected`:``}">
            <input type="radio" name="payment" value="upi" ${l.paymentMode===`upi`?`checked`:``} />
            <div>
              <span>⚡ ${d(`payUpi`)}</span>
              <div style="font-size:10px; color:var(--ink-muted);">Tokenized via Razorpay · Card/UPI data never stored</div>
            </div>
          </label>
          <label class="pay-radio-opt ${l.paymentMode===`cod`?`selected`:``}">
            <input type="radio" name="payment" value="cod" ${l.paymentMode===`cod`?`checked`:``} />
            <div>
              <span>💵 ${d(`payCod`)}</span>
              <div style="font-size:10px; color:var(--ink-muted);">Ledger reconciled · Capped at ₹1,500 for safety</div>
            </div>
          </label>
        </div>
      </div>

      <!-- DPDP Act 2023 Explicit Consent Checkbox (Sec 11) -->
      <div class="dpdp-box" style="margin: 0;">
        <label style="display:flex; align-items:flex-start; gap:10px; cursor:pointer;">
          <input type="checkbox" id="dpdp-consent-chk" ${l.dpdpConsent?`checked`:``} style="margin-top:2px;" />
          <span style="font-size:11.5px; color:var(--ink); line-height:1.4;">
            <strong>DPDP Act 2023 Consent:</strong> I agree to Freshcart processing my delivery address and masked contact strictly for fulfilling this farm-fresh order. Data is hosted in India (AWS Mumbai) and never sold.
          </span>
        </label>
      </div>

      <!-- Security Guarantee & Idempotency Token Preview (Sec 7) -->
      <div style="font-size:10.5px; color:var(--ink-muted); text-align:center;">
        🔒 Replay Protected · Idempotency Key: <code style="font-family:monospace;">fc_idem_${Math.floor(1e3+Math.random()*9e3)}</code>
      </div>

      <!-- Checkout Button -->
      <button class="btn-primary" id="btn-place-order" style="width:100%; height:48px; font-size:15px;">
        ${d(`placeOrder`)} • ₹${i}
      </button>
    </div>
  `}function w(){let e=l.orders[0];return e?`
    <div class="tracking-screen-view">
      <!-- Simulated Interactive Route Map with Location Privacy Pill (Sec 4) -->
      <div class="tracking-map-wrap">
        <svg class="sim-map-svg" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="#E9EFEA" />
          <path d="M 0 50 Q 150 70 240 40 T 400 60" fill="none" stroke="#D3DFC8" stroke-width="26" />
          <path d="M 50 220 Q 80 140 180 120 T 360 30" fill="none" stroke="#D3DFC8" stroke-width="20" />
          <path d="M 40 180 L 120 150 L 220 130 L 320 70" fill="none" stroke="#FFF" stroke-width="12" stroke-linecap="round" />
          
          <path d="M 60 170 C 110 140, 180 140, 240 100 S 330 80, 340 60" 
                fill="none" stroke="#1F3B2C" stroke-width="5" stroke-dasharray="6,4" />
          
          <!-- Farm Pin -->
          <g transform="translate(60, 170)">
            <circle r="16" fill="#1F3B2C" />
            <text x="0" y="5" text-anchor="middle" font-size="12" fill="#fff">🌾</text>
            <text x="0" y="28" text-anchor="middle" font-size="10" font-weight="700" fill="#12251A">Patel Farm</text>
          </g>

          <!-- Customer Home Pin -->
          <g transform="translate(340, 60)">
            <circle r="16" fill="#E08A2E" />
            <text x="0" y="5" text-anchor="middle" font-size="12" fill="#fff">🏡</text>
            <text x="0" y="28" text-anchor="middle" font-size="10" font-weight="700" fill="#12251A">Your Doorstep</text>
          </g>

          <!-- Moving Delivery Rider on EV -->
          <g transform="translate(210, 115)">
            <circle r="18" fill="#fff" stroke="#1F3B2C" stroke-width="2" />
            <circle r="8" fill="#E08A2E" opacity="0.3">
              <animate attributeName="r" values="8;18;8" dur="2s" repeatCount="indefinite" />
            </circle>
            <text x="0" y="5" text-anchor="middle" font-size="14">🛵</text>
          </g>
        </svg>

        <!-- Floating ETA & OTP Badge -->
        <div class="floating-eta-banner">
          <div class="eta-left">
            <div class="eta-label">${d(`eta`)}</div>
            <div class="eta-val">18 mins · 08:35 AM</div>
          </div>
          <div class="eta-otp-badge">
            <span>Delivery OTP</span>
            <strong>${e.deliveryOtp}</strong>
          </div>
        </div>
      </div>

      <div class="tracking-body">
        <!-- Privacy-Protected Telemetry Tag (Sec 4) -->
        <div style="background:#EEF5F1; border:1px solid #D2E7DB; border-radius:var(--radius-sm); padding:6px 10px; font-size:10.5px; color:var(--forest-dark); margin-bottom:12px; display:flex; align-items:center; gap:6px;">
          ${u(`lock`,13)}
          <span><strong>Location Privacy:</strong> Live rider GPS is streamed only while delivery is active. Numbers are masked via relay.</span>
        </div>

        <!-- Delivery Partner / Masked Phone Row -->
        <div class="tracking-partner-card">
          <div class="partner-info">
            <div class="partner-icon-wrap">
              ${u(`truck`,22)}
            </div>
            <div>
              <div style="font-size:13px; font-weight:700; color:var(--ink);">
                ${e.riderName}
              </div>
              <div style="font-size:11px; color:var(--ink-soft); display:flex; align-items:center; gap:4px;">
                <span class="masked-data-tag">${e.riderPhone}</span>
                <span class="proxy-protect-badge">Relay</span>
              </div>
            </div>
          </div>
          <div class="partner-actions">
            <button class="btn-icon-round" id="btn-call-rider-proxy" title="Call Rider via Virtual Masked Relay">
              ${u(`phone`,15)}
            </button>
            <button class="btn-icon-round" id="btn-call-farmer-proxy" title="Call Farmer via Virtual Masked Relay">
              🌾
            </button>
          </div>
        </div>

        <!-- 5-Step Order State Machine -->
        <h4 style="font-family:var(--font-serif); font-size:15px; color:var(--forest-dark); margin-bottom:10px;">
          ${l.lang===`en`?`Live Harvest & Order Journey`:`कटाई व डिलीवरी की स्थिति`}
        </h4>

        <div class="timeline-list">
          ${e.timeline.map(e=>`
            <div class="timeline-node ${e.done?`done`:``} ${e.current?`current`:``}">
              <div class="timeline-dot">
                ${e.done?u(`check`,11):``}
              </div>
              <div class="timeline-text">
                <h4>
                  <span>${e.step}</span>
                  <span class="node-time">${e.time}</span>
                </h4>
                <p>${e.desc}</p>
              </div>
            </div>
          `).join(``)}
        </div>

        <!-- Order Items with Idempotency Token (Sec 7) -->
        <div class="bill-card" style="margin-top:12px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <h4 style="font-size:12.5px; font-weight:700;">
              ${l.lang===`en`?`Harvest Items in Order`:`इस ऑर्डर की ताज़ा सब्ज़ियां`} (${e.id})
            </h4>
            <span style="font-size:10px; font-family:monospace; color:var(--forest);">Idempotent ✓</span>
          </div>
          ${e.items.map(e=>`
            <div class="bill-row">
              <span>${e.name} × ${e.qty}</span>
              <span>₹${e.price*e.qty}</span>
            </div>
          `).join(``)}
          <div class="bill-row total">
            <span>${d(`grandTotal`)} (${e.paymentMode})</span>
            <span>₹${e.bill.total}</span>
          </div>
        </div>

        <!-- Report Issue Button (PRD FR-6.4 & Sec 8 Dual-Approval Check) -->
        <button class="btn-primary" id="btn-report-issue" style="margin-top:16px; width:100%; background:transparent; border:1.5px solid var(--forest); color:var(--forest);">
          ${l.lang===`en`?`Need Help or Report Quality Issue`:`सहायता या गुणवत्ता शिकायत दर्ज करें`}
        </button>
      </div>
    </div>
  `:`
      <div class="cart-screen-view">
        <h2 class="cart-header-title">${d(`orderTrackingTitle`)}</h2>
        <div class="empty-state">
          <div class="empty-state-icon">${u(`package`,36)}</div>
          <h3>${l.lang===`en`?`No Active Orders`:`कोई सक्रिय ऑर्डर नहीं`}</h3>
          <p style="font-size:12px; color:var(--ink-soft)">
            ${l.lang===`en`?`Place an order from today’s harvest to track it live.`:`आज की ताज़ा कटाई से ऑर्डर करें`}
          </p>
        </div>
      </div>
    `}function T(){return`
    <div class="cart-screen-view">
      <h2 class="cart-header-title">${d(`navBrowse`)} & Filter</h2>
      
      <div class="header-search-bar" style="border:1px solid var(--line);">
        ${u(`search`,18)}
        <input 
          type="text" 
          id="browse-search-input" 
          placeholder="${d(`searchPlaceholder`)}" 
          value="${l.searchQuery}"
        />
      </div>

      <div style="margin-top:8px;">
        <label style="font-size:12px; font-weight:700; color:var(--forest-dark); margin-bottom:6px; display:block;">
          ${l.lang===`en`?`Filter by Category`:`श्रेणी चुनें`}
        </label>
        ${b()}
      </div>

      <div style="margin-top:8px;">
        ${x()}
      </div>
    </div>
  `}function E(){let e=l.authMode===`login`,t=l.currentUser||l.users[0];return`
    <div class="auth-screen-view">
      <!-- Back Navigation Header -->
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:2px;">
        <button class="proto-btn" id="btn-auth-back" style="padding:6px 12px; font-size:12px; gap:6px;">
          ${u(`arrowLeft`,14)} ${l.lang===`en`?`Back`:`वापस`}
        </button>
        <span style="font-size:11px; color:var(--ink-soft); font-weight:600; display:flex; align-items:center; gap:4px;">
          ${u(`shieldCheck`,13)} 256-Bit SSL · Keystore Active
        </span>
      </div>

      <!-- Hero Branding Card -->
      <div class="auth-header-card">
        <div class="auth-brand-badge">
          ${u(`leaf`,12)} Farm-to-Door Transparency
        </div>
        <h1 class="auth-title">${d(e?`authTitleLogin`:`authTitleRegister`)}</h1>
        <p class="auth-sub">${d(e?`authSubLogin`:`authSubRegister`)}</p>
      </div>

      <!-- Segmented Mode Switcher (Log In vs Sign Up) -->
      <div class="auth-tab-switcher">
        <button class="auth-tab-btn ${e?`active`:``}" id="btn-auth-tab-login" type="button">
          ${u(`logIn`,14)} ${l.lang===`en`?`Log In`:`लॉग इन`}
        </button>
        <button class="auth-tab-btn ${e?``:`active`}" id="btn-auth-tab-register" type="button">
          ${u(`userPlus`,14)} ${l.lang===`en`?`Sign Up`:`साइन अप`}
        </button>
      </div>

      <!-- Google 1-Click Sign-In (Official Branded Button) -->
      <div>
        <button class="btn-google-auth" id="btn-google-signin-action" type="button" title="Sign in with your verified Google account">
          <span class="google-icon-wrapper">${u(`google`,20)}</span>
          <span>${d(`continueWithGoogle`)}</span>
          <span class="google-verified-tag">1-Tap Fast</span>
        </button>
        <div style="font-size:10.5px; color:var(--ink-soft); text-align:center; margin-top:5px;">
          ${l.lang===`en`?`Instant secure Google OAuth 2.0 · Verified ID`:`त्वरित सुरक्षित Google OAuth 2.0 · सत्यापित पहचान`}
        </div>
      </div>

      <!-- Divider -->
      <div class="auth-divider">
        <span>${d(`orContinueWith`)}</span>
      </div>

      <!-- Form Card -->
      <form class="auth-form-card" id="auth-main-form" onsubmit="return false;">
        ${e?`
          <!-- Login Identifier (Email or Phone) -->
          <div class="auth-field">
            <label for="auth-login-id">${u(`mail`,14)} ${d(`emailOrPhoneLabel`)}</label>
            <div class="auth-input-wrapper">
              <span class="auth-input-icon">${u(`user`,15)}</span>
              <input type="text" id="auth-login-id" class="auth-input" placeholder="priya.sharma@gmail.com or 9876543210" required value="${t.email}" />
            </div>
          </div>
        `:`
          <!-- Full Name -->
          <div class="auth-field">
            <label for="auth-reg-name">${u(`user`,14)} ${d(`fullNameLabel`)}</label>
            <div class="auth-input-wrapper">
              <span class="auth-input-icon">${u(`user`,15)}</span>
              <input type="text" id="auth-reg-name" class="auth-input" placeholder="e.g. Priya Sharma" required value="Priya Sharma" />
            </div>
          </div>

          <!-- Email Address -->
          <div class="auth-field">
            <label for="auth-reg-email">${u(`mail`,14)} ${d(`emailLabel`)}</label>
            <div class="auth-input-wrapper">
              <span class="auth-input-icon">${u(`mail`,15)}</span>
              <input type="email" id="auth-reg-email" class="auth-input" placeholder="priya.sharma@gmail.com" required value="priya.sharma@gmail.com" />
            </div>
          </div>

          <!-- Phone Number -->
          <div class="auth-field">
            <label for="auth-reg-phone">${u(`phone`,14)} ${d(`phoneLabel`)}</label>
            <div class="auth-input-wrapper">
              <span class="auth-input-icon">${u(`phone`,15)}</span>
              <input type="tel" id="auth-reg-phone" class="auth-input" placeholder="+91 98765 43210" required value="+91 98765 43210" />
            </div>
          </div>

          <!-- Delivery Address -->
          <div class="auth-field">
            <label for="auth-reg-address">${u(`mapPin`,14)} ${d(`addressLabel`)}</label>
            <div class="auth-input-wrapper">
              <span class="auth-input-icon">${u(`mapPin`,15)}</span>
              <input type="text" id="auth-reg-address" class="auth-input" placeholder="Flat A-402, Sunrise Enclave, Sector 14" required value="Flat A-402, Sunrise Enclave, Sector 14" />
            </div>
          </div>

          <!-- Account Type (Consumer vs Farmer) -->
          <div class="auth-field">
            <label>${d(`userTypeLabel`)}</label>
            <div class="auth-roles-grid">
              <div class="auth-role-card ${l.regRole===`consumer`?`selected`:``}" id="reg-role-consumer">
                <div class="auth-role-title">${d(`roleConsumerOption`)}</div>
                <div class="auth-role-desc">${l.lang===`en`?`Get crisp vegetables harvested this morning`:`ताज़ा तोड़ी गई सब्ज़ियाँ प्राप्त करें`}</div>
              </div>
              <div class="auth-role-card ${l.regRole===`farmer`?`selected`:``}" id="reg-role-farmer">
                <div class="auth-role-title">${d(`roleFarmerOption`)}</div>
                <div class="auth-role-desc">${l.lang===`en`?`Sell morning harvest directly with 0 middleman`:`बिना बिचौलियों के सीधे फसल बेचें`}</div>
              </div>
            </div>
          </div>
        `}

        <!-- Password Field -->
        <div class="auth-field">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <label for="auth-password">${u(`lock`,14)} ${d(`passwordLabel`)}</label>
            ${e?`
              <button type="button" class="auth-switch-link" id="btn-forgot-password" style="font-size:11px; text-decoration:none; background:none; border:none;">
                ${d(`forgotPasswordLabel`)}
              </button>
            `:``}
          </div>
          <div class="auth-input-wrapper">
            <span class="auth-input-icon">${u(`lock`,15)}</span>
            <input 
              type="${l.isPasswordVisible?`text`:`password`}" 
              id="auth-password" 
              class="auth-input" 
              placeholder="${e?`Enter your password`:`Create a secure password`}" 
              required 
              value="FreshCart@2026" 
            />
            <button type="button" class="auth-input-trailing-btn" id="btn-toggle-password-visibility" title="Show/Hide password">
              ${u(l.isPasswordVisible?`eyeOff`:`eye`,16)}
            </button>
          </div>

          ${e?``:`
            <!-- Live Password Strength Meter -->
            <div class="password-meter-wrap">
              <div class="password-meter-bars">
                <div class="password-meter-bar active-strong"></div>
                <div class="password-meter-bar active-strong"></div>
                <div class="password-meter-bar active-strong"></div>
              </div>
              <div class="password-meter-label">
                <span>Security: <strong>Strong (AES-256 Ready)</strong></span>
                <span>8+ chars · 1 symbol · 1 number</span>
              </div>
            </div>
          `}
        </div>

        ${e?`
          <!-- Remember Me -->
          <label class="auth-checkbox-label">
            <input type="checkbox" id="auth-remember-me" ${l.rememberMe?`checked`:``} />
            <span>${d(`rememberMeLabel`)}</span>
          </label>
        `:`
          <!-- DPDP Act Consent -->
          <label class="auth-checkbox-label">
            <input type="checkbox" id="auth-dpdp-consent" checked required />
            <span>${d(`dpdpAuthConsent`)}</span>
          </label>
        `}

        <!-- Submit Button -->
        <button class="btn-auth-primary" id="btn-auth-submit" type="submit">
          ${u(e?`logIn`:`check`,18)}
          <span>${d(e?`loginSubmitBtn`:`signUpSubmitBtn`)}</span>
        </button>

        ${e?`
          <!-- 1-Tap Quick Demo Logins -->
          <div class="auth-demo-box">
            <div class="auth-demo-title">
              ${u(`key`,13)} ${l.lang===`en`?`Quick 1-Tap Demo Accounts`:`1-क्लिक डेमो खाते`}
            </div>
            <div class="auth-demo-chips">
              <button type="button" class="auth-demo-chip" data-quick-user="usr-1">
                <span>👤 Priya (Buyer)</span>
              </button>
              <button type="button" class="auth-demo-chip" data-quick-user="usr-2">
                <span>👤 Aakash (Buyer)</span>
              </button>
              <button type="button" class="auth-demo-chip" data-quick-user="usr-3">
                <span>🌾 Ramesh (Farmer)</span>
              </button>
            </div>
          </div>
        `:``}
      </form>

      <!-- Bottom Switcher Prompt -->
      <div class="auth-switch-prompt">
        <span>${d(e?`switchRegisterPrompt`:`switchLoginPrompt`)}</span>
        <button type="button" class="auth-switch-link" id="btn-auth-toggle-mode" style="background:none; border:none; font-family:inherit; font-size:inherit;">
          ${d(e?`switchRegisterAction`:`switchLoginAction`)}
        </button>
      </div>

      <!-- Security / Privacy Footnote -->
      <div style="text-align:center; font-size:10.5px; color:var(--ink-muted); line-height:1.45; padding-top:6px; border-top:1px dashed var(--line);">
        <strong>DPDP Act 2023 Compliant</strong> · Encrypted session stored locally in Mumbai AWS data centers with purpose limitation.
      </div>
    </div>
  `}function D(){if(!l.currentUser)return`
      <div class="cart-screen-view">
        <div class="auth-header-card" style="margin-top:12px;">
          <div class="auth-brand-badge">${u(`shieldCheck`,12)} Freshcart Secure Access</div>
          <h2 class="auth-title">${l.lang===`en`?`Sign In to Your Account`:`अपने खाते में लॉग इन करें`}</h2>
          <p class="auth-sub">${l.lang===`en`?`Sign in with Google or your email to view your farm orders, live delivery tracking, and saved address.`:`अपने ताज़ा ऑर्डर और लाइव ट्रैकिंग देखने के लिए Google या ईमेल से साइन इन करें।`}</p>
          <div style="margin-top:16px; display:flex; flex-direction:column; gap:10px;">
            <button class="btn-google-auth" id="btn-profile-google-login">
              <span class="google-icon-wrapper">${u(`google`,20)}</span>
              <span>${d(`continueWithGoogle`)}</span>
              <span class="google-verified-tag">1-Tap Fast</span>
            </button>
            <button class="btn-auth-primary" id="btn-profile-open-login" style="height:44px; font-size:14px;">
              ${u(`logIn`,16)} ${d(`loginSubmitBtn`)} / ${d(`signUpSubmitBtn`)}
            </button>
          </div>
        </div>
      </div>
    `;let t=l.currentUser;return`
    <div class="cart-screen-view">
      <!-- Profile Header Row with Avatar & Verification -->
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:8px; background:#FFFFFF; padding:14px; border-radius:var(--radius-lg); border:1px solid var(--line);">
        <img src="${t.avatar}" alt="${t.name}" style="width:54px; height:54px; border-radius:50%; object-fit:cover; border:2px solid var(--forest-tint);" />
        <div style="flex:1;">
          <div style="display:flex; align-items:center; gap:6px;">
            <h2 style="font-family:var(--font-serif); font-size:19px; color:var(--forest-dark); margin:0;">${t.name}</h2>
            ${t.provider===`google`?`
              <span title="Verified with Google OAuth 2.0" style="display:inline-flex;">${u(`google`,16)}</span>
            `:``}
          </div>
          <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">
            ${t.email}
          </div>
          <div style="font-size:11.5px; color:var(--ink-muted); display:flex; align-items:center; gap:4px; margin-top:2px;">
            <span class="masked-data-tag">${t.phone}</span>
            <span>· ${t.address?t.address.split(`,`)[0]:`Sunrise Enclave`}</span>
          </div>

          ${t.provider===`google`?`
            <div style="display:inline-flex; align-items:center; gap:5px; background:#E8F0FE; color:#1A73E8; font-size:10.5px; font-weight:700; padding:2px 8px; border-radius:12px; margin-top:6px; border:1px solid #D2E3FC;">
              ${u(`check`,11)} ${d(`googleVerifiedAccount`)}
            </div>
          `:``}
        </div>
      </div>

      <!-- Account Actions (Switch / Sign Out) -->
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
        <button class="proto-btn" id="btn-profile-switch-account" style="justify-content:center; height:38px; font-size:12px;">
          ${u(`user`,14)} Switch Account
        </button>
        <button class="btn-danger-sec" id="btn-profile-signout" style="justify-content:center; height:38px; font-size:12px;">
          ${u(`logOut`,14)} ${d(`signOutBtn`)}
        </button>
      </div>

      <!-- Mobile Device Integrity & Keystore Badge (Sec 9) -->
      <div class="security-integrity-pill">
        ${u(`shieldCheck`,14)}
        <span>${d(`securityIntegrityBadge`)}</span>
      </div>

      <!-- Active Sessions Manager (Sec 5.1) -->
      <div class="slot-select-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <h4>${u(`smartphone`,15)} ${d(`activeSessionsTitle`)}</h4>
          <span style="font-size:10px; color:var(--forest); font-weight:700;">Rotating Refresh JWT</span>
        </div>
        
        <div>
          ${l.sessions.map(e=>`
            <div class="session-item-row">
              <div class="session-info">
                <strong>
                  ${e.device}
                  ${e.isCurrent?`<span class="badge-current-device">This Device</span>`:``}
                </strong>
                <div class="sub">${e.os} · ${e.location} · <span style="font-family:monospace;">${e.ip}</span></div>
              </div>
              ${e.isCurrent?`
                <span style="font-size:10.5px; color:var(--forest); font-weight:600;">Active</span>
              `:`
                <button class="proto-btn" data-revoke-session="${e.id}" style="font-size:10.5px; padding:3px 8px;">
                  Sign Out
                </button>
              `}
            </div>
          `).join(``)}
        </div>

        <button class="btn-secondary-sec" id="btn-signout-all-devices" style="width:100%; margin-top:8px; justify-content:center;">
          ${d(`signOutOtherDevices`)}
        </button>
      </div>

      <!-- DPDP Act 2023 Rights & Privacy Center (Sec 11) -->
      <div class="dpdp-box">
        <div class="dpdp-header">
          ${u(`shieldCheck`,16)}
          <span>${d(`dpdpConsentTitle`)}</span>
        </div>
        <p class="dpdp-notice-text">
          Freshcart is fully compliant with India's <strong>Digital Personal Data Protection Act, 2023</strong>. Data is stored locally in Mumbai AWS data centers with purpose limitation.
        </p>

        <div class="dpdp-actions-row">
          <button class="btn-secondary-sec" id="btn-download-my-data">
            ${u(`download`,14)} ${d(`downloadDataBtn`)}
          </button>
          <button class="btn-danger-sec" id="btn-request-erasure">
            ${d(`requestErasureBtn`)}
          </button>
        </div>

        <!-- Grievance Officer Contact (Sec 11 Mandate) -->
        <div style="margin-top:12px; padding-top:10px; border-top:1px dashed var(--line); font-size:11px; color:var(--ink-soft); line-height:1.45;">
          <strong>Data Protection & Grievance Officer:</strong><br/>
          ${e.dpdpCompliance.grievanceOfficer.name} · <a href="mailto:${e.dpdpCompliance.grievanceOfficer.email}" style="color:var(--forest);">${e.dpdpCompliance.grievanceOfficer.email}</a><br/>
          Response SLA: 48 hours · New Delhi & Gurugram, India
        </div>
      </div>

      <!-- Language Preferences -->
      <div class="slot-select-card">
        <h4>${l.lang===`en`?`Language Preferences`:`भाषा चुनें`}</h4>
        <div style="display:flex; gap:10px;">
          <button class="proto-btn ${l.lang===`en`?`active`:``}" id="prof-lang-en" style="flex:1; justify-content:center; height:38px;">
            English
          </button>
          <button class="proto-btn ${l.lang===`hi`?`active`:``}" id="prof-lang-hi" style="flex:1; justify-content:center; height:38px;">
            हिंदी (Hindi)
          </button>
        </div>
      </div>
    </div>
  `}function O(){let e=l.orders[0];return`
    <div class="cart-screen-view">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:10px;">
          <div style="width:44px; height:44px; border-radius:50%; background:var(--forest); color:#fff; display:flex; align-items:center; justify-content:center;">
            ${u(`truck`,22)}
          </div>
          <div>
            <h2 style="font-family:var(--font-serif); font-size:18px;">Rider: Amit Kumar</h2>
            <div style="font-size:11px; color:var(--ink-soft);">Hero Electric EV · DL 03 AX 4812</div>
          </div>
        </div>
        <span class="penny-drop-badge">${u(`check`,10)} On Delivery Duty</span>
      </div>

      <!-- RBAC Notice (Sec 5.2) -->
      <div style="background:#FFF9ED; border:1px solid #FFE4A0; border-radius:var(--radius-sm); padding:6px 10px; font-size:11px; color:var(--soil);">
        🔒 <strong>RBAC Policy Active:</strong> You can only see your assigned delivery and masked customer contact. Customer history is restricted.
      </div>

      <!-- Active Assigned Delivery Run -->
      ${e?`
        <div class="slot-select-card" style="border:1.5px solid var(--forest);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="font-size:13px; color:var(--forest);">Active Order #${e.id}</strong>
            <span class="slot-tag" style="background:var(--forest);">In Transit</span>
          </div>

          <div style="font-size:12px; margin-bottom:10px;">
            <div style="padding:6px 0; border-bottom:1px dashed var(--line);">
              <strong>Pickup (Farm):</strong> Patel Organic Farms, Khed (Ramesh Patel)
            </div>
            <div style="padding:6px 0; border-bottom:1px dashed var(--line);">
              <strong>Drop (Customer):</strong> ${e.deliveryAddress}
            </div>
            <div style="padding:6px 0; display:flex; align-items:center; justify-content:space-between;">
              <div>
                <strong>Customer:</strong> ${e.customerName}<br/>
                <span class="masked-data-tag">${e.customerPhone}</span>
              </div>
              <button class="proto-btn active" id="btn-rider-call-proxy" style="font-size:11px; padding:4px 10px;">
                ${u(`phone`,12)} Call via Masked Proxy
              </button>
            </div>
          </div>

          <!-- OTP Verification Box (Sec 4) -->
          <div style="background:var(--forest-tint); border-radius:var(--radius-md); padding:12px; margin-top:8px;">
            <label style="font-size:12px; font-weight:700; color:var(--forest-dark); display:block; margin-bottom:6px;">
              Enter Customer 4-Digit Delivery OTP
            </label>
            <div style="display:flex; gap:8px;">
              <input 
                type="text" 
                id="rider-otp-input" 
                maxlength="4" 
                placeholder="e.g. 4829" 
                value="${l.riderOtpInput}"
                style="flex:1; height:42px; text-align:center; font-family:var(--font-stamp); font-size:20px; letter-spacing:4px; border:1px solid var(--forest); border-radius:var(--radius-sm); outline:none;"
              />
              <button class="btn-primary" id="btn-rider-verify-otp" style="height:42px; padding:0 16px;">
                Verify & Deliver
              </button>
            </div>
            <div style="font-size:10px; color:var(--ink-soft); margin-top:6px;">
              Order completes and payout is released to farmer upon OTP validation.
            </div>
          </div>
        </div>
      `:`
        <div class="empty-state">
          <h3>No assigned jobs</h3>
        </div>
      `}
    </div>
  `}function k(){return`
    <div class="cart-screen-view">
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
        <div style="display:flex; align-items:center; gap:8px;">
          <div style="width:36px; height:36px; border-radius:50%; background:#12251A; color:#72E8A5; display:flex; align-items:center; justify-content:center;">
            ${u(`lock`,18)}
          </div>
          <div>
            <h2 style="font-family:var(--font-serif); font-size:17px; color:var(--forest-dark);">Security & Admin Console</h2>
            <div style="font-size:11px; color:var(--ink-soft);">MFA Active · CERT-In 6-Hour Ready</div>
          </div>
        </div>
        <span class="penny-drop-badge">${u(`check`,10)} AWS Mumbai (ap-south-1)</span>
      </div>

      <!-- Admin Sub Tabs -->
      <div class="category-filter-row" style="padding:0; margin-bottom:6px;">
        <button class="cat-pill ${l.adminTab===`audit`?`active`:``}" data-admin-subtab="audit">
          📋 Audit Trail (${l.auditLogs.length})
        </button>
        <button class="cat-pill ${l.adminTab===`kyc`?`active`:``}" data-admin-subtab="kyc">
          📑 Farmer KYC
        </button>
        <button class="cat-pill ${l.adminTab===`rbac`?`active`:``}" data-admin-subtab="rbac">
          🛡️ RBAC Matrix
        </button>
        <button class="cat-pill ${l.adminTab===`dpdp`?`active`:``}" data-admin-subtab="dpdp">
          ⚖️ DPDP Compliance
        </button>
      </div>

      <!-- Subtab 1: Immutable Audit Trail (Sec 12) -->
      ${l.adminTab===`audit`?`
        <div class="slot-select-card" style="padding:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
            <strong style="font-size:12px; color:var(--forest);">${d(`auditLogsTitle`)}</strong>
            <button class="proto-btn" id="btn-refresh-audit" style="font-size:10px; padding:2px 8px;">
              Refresh Feed
            </button>
          </div>

          <div class="audit-logs-wrap">
            ${l.auditLogs.map(e=>`
              <div class="audit-log-entry">
                <div class="audit-log-top">
                  <span class="audit-log-tag ${e.severity}">${e.event}</span>
                  <span style="color:#788A80; font-size:10px;">${e.timestamp}</span>
                </div>
                <div style="color:#A4BDB0; font-size:10.5px;">
                  Actor: <strong>${e.actor}</strong> · Target: <strong>${e.target}</strong>
                </div>
                <div class="audit-log-msg">${e.detail}</div>
              </div>
            `).join(``)}
          </div>
        </div>
      `:``}

      <!-- Subtab 2: Farmer KYC Verification Queue (Sec 3 & 5.2) -->
      ${l.adminTab===`kyc`?`
        <div class="slot-select-card">
          <h4>Farmer KYC & Payout Verification Queue</h4>
          <p style="font-size:11px; color:var(--ink-soft); margin-bottom:10px;">
            Farmer identity documents are stored in private encrypted S3 buckets. Links expire in 15 minutes.
          </p>

          ${l.farmers.map(e=>`
            <div style="background:#FAF8F2; border:1px solid var(--line); border-radius:var(--radius-md); padding:10px; margin-bottom:10px;">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <strong>${e.name} (${e.farmName})</strong>
                <span class="penny-drop-badge">${e.kyc.status}</span>
              </div>
              <div style="font-size:11.5px; color:var(--ink-soft); line-height:1.4;">
                • Aadhaar UID: <span class="masked-data-tag">${e.kyc.aadhaarMasked}</span><br/>
                • Land Registry: <strong>${e.kyc.landRecordDoc}</strong><br/>
                • Bank Account: <span class="masked-data-tag">${e.kyc.bankMasked}</span> (${e.kyc.pennyDropStatus})
              </div>

              <div style="display:flex; gap:8px; margin-top:8px;">
                <button class="btn-secondary-sec" data-preview-kyc="${e.id}" style="font-size:11px; padding:5px 10px;">
                  ${u(`fileText`,13)} View Watermarked Doc
                </button>
                <button class="proto-btn active" data-approve-kyc="${e.id}" style="font-size:11px; padding:5px 10px;">
                  ${u(`check`,12)} Re-Verify
                </button>
              </div>
            </div>
          `).join(``)}
        </div>
      `:``}

      <!-- Subtab 3: RBAC Access Control Matrix (Sec 5.2) -->
      ${l.adminTab===`rbac`?`
        <div class="slot-select-card">
          <h4>Section 5.2: Role-Based Access Control (RBAC)</h4>
          <p style="font-size:11px; color:var(--ink-soft);">
            Client-side restrictions are convenience only. Every endpoint enforces object-level authorization checks.
          </p>

          <table class="rbac-table">
            <thead>
              <tr>
                <th>Role</th>
                <th>Can Access</th>
                <th>Cannot Access</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Consumer</strong></td>
                <td>Catalog, own cart, own orders</td>
                <td>Other users' data, Farmer KYC</td>
              </tr>
              <tr>
                <td><strong>Farmer</strong></td>
                <td>Own produce listings, orders, earnings</td>
                <td>Other farmers' data, customer raw numbers</td>
              </tr>
              <tr>
                <td><strong>Rider</strong></td>
                <td>Assigned run pickup & drop</td>
                <td>Other riders' runs, full customer history</td>
              </tr>
              <tr>
                <td><strong>Admin</strong></td>
                <td>KYC approval, audit logs, metrics</td>
                <td>Modifying ledger (immutable append-only)</td>
              </tr>
            </tbody>
          </table>
        </div>
      `:``}

      <!-- Subtab 4: DPDP Act 2023 Compliance Status (Sec 11) -->
      ${l.adminTab===`dpdp`?`
        <div class="dpdp-box">
          <div class="dpdp-header">
            ${u(`shieldCheck`,16)}
            <span>DPDP Act 2023 Readiness Dashboard</span>
          </div>
          <div style="font-size:11.5px; line-height:1.5; color:var(--ink);">
            • <strong>India Region Hosting:</strong> AWS Mumbai (ap-south-1). Zero cross-border export.<br/>
            • <strong>Consent Version:</strong> v2026.1 registered with cryptographic hash.<br/>
            • <strong>Data Portability:</strong> Machine-readable JSON export available on demand.<br/>
            • <strong>Right to Erasure:</strong> Account anonymization executed within 7 days.<br/>
            • <strong>CERT-In Reporting:</strong> Automated webhook alerts for 6-hour reporting window.
          </div>
        </div>
      `:``}
    </div>
  `}function A(){let e=l.orders[0];return`
    <div class="farmer-dashboard-view">
      <!-- Offline Resilience Notice -->
      <div style="background:var(--forest-tint); border:1px solid rgba(31,59,44,0.15); border-radius:var(--radius-md); padding:8px 12px; font-size:11px; display:flex; align-items:center; gap:8px; color:var(--forest-dark);">
        ${u(`leaf`,14)}
        <span>${d(`offlineNotice`)}</span>
      </div>

      <!-- Farmer Header Card with Penny-Drop Verified Account Badge (Sec 8) -->
      <div class="farmer-head-card">
        <div class="farmer-head-top">
          <div style="display:flex; align-items:center; gap:10px;">
            <img src="/images/farmer_ramesh.jpg" style="width:46px; height:46px; border-radius:50%; border:2px solid var(--harvest-soft); object-fit:cover;" />
            <div>
              <h2 style="font-family:var(--font-serif); font-size:18px;">Ramesh Patel</h2>
              <div style="font-size:11.5px; opacity:0.9;">Patel Organic Farms · Khed</div>
            </div>
          </div>
          <span class="farmer-tag-pill">● Accepting Orders</span>
        </div>

        <div class="farmer-kpi-grid">
          <div class="farmer-kpi-box">
            <div class="kpi-num">₹2,840</div>
            <div class="kpi-label">${d(`earningsToday`)}</div>
          </div>
          <div class="farmer-kpi-box">
            <div class="kpi-num">₹14,200</div>
            <div class="kpi-label">${d(`weeklyEarnings`)}</div>
          </div>
        </div>

        <div style="margin-top:10px; font-size:10.5px; opacity:0.9; display:flex; justify-content:space-between; align-items:center;">
          <span>Bank: <code style="font-family:monospace;">HDFC Bank ••••4812</code> (Verified)</span>
          <span>${d(`payoutNote`)}</span>
        </div>
      </div>

      <!-- Weekly Earnings Chart -->
      <div class="slot-select-card">
        <div style="display:flex; justify-content:space-between; align-items:baseline;">
          <h4>${u(`trendingUp`,16)} Weekly Direct Earnings (₹)</h4>
          <span style="font-size:11px; color:var(--forest); font-weight:700;">+28% vs Mandi</span>
        </div>
        
        <div class="chart-bar-container">
          <div class="chart-col"><div class="chart-bar" style="height:45px;"></div><span class="day">Mon</span></div>
          <div class="chart-col"><div class="chart-bar" style="height:60px;"></div><span class="day">Tue</span></div>
          <div class="chart-col"><div class="chart-bar" style="height:55px;"></div><span class="day">Wed</span></div>
          <div class="chart-col"><div class="chart-bar" style="height:70px;"></div><span class="day">Thu</span></div>
          <div class="chart-col"><div class="chart-bar" style="height:65px;"></div><span class="day">Fri</span></div>
          <div class="chart-col"><div class="chart-bar" style="height:80px;"></div><span class="day">Sat</span></div>
          <div class="chart-col highlight"><div class="chart-bar" style="height:88px;"></div><span class="day">Today</span></div>
        </div>
      </div>

      <!-- Incoming Order Alert with Masked Customer Phone (Sec 4) -->
      ${e?`
        <div class="incoming-order-alert">
          <h3>
            ${u(`package`,18)}
            <span>Incoming Order #${e.id}</span>
          </h3>
          <p style="font-size:12px; color:var(--ink-soft); margin-bottom:8px;">
            Deliver to: <strong>${e.deliveryAddress}</strong><br/>
            Customer: ${e.customerName} (<span class="masked-data-tag">${e.customerPhone}</span>)
          </p>

          <div style="background:#fff; border-radius:var(--radius-sm); padding:8px 10px; margin-bottom:12px; font-size:12px;">
            ${e.items.map(e=>`
              <div style="display:flex; justify-content:space-between; padding:3px 0;">
                <span>${e.name}</span>
                <strong>${e.qty} × ${e.unit}</strong>
              </div>
            `).join(``)}
          </div>

          <div style="display:flex; gap:8px;">
            <button class="btn-primary" id="btn-farmer-accept-order" style="flex:1; height:42px; font-size:13px; background:var(--forest);">
              ${d(`acceptOrder`)}
            </button>
            <button class="btn-primary" id="btn-farmer-pack-order" style="flex:1; height:42px; font-size:13px; background:var(--soil);">
              ${d(`markPacked`)}
            </button>
          </div>
        </div>
      `:``}

      <!-- Active Harvest Listings -->
      <div class="slot-select-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
          <h4>${d(`activeBatches`)}</h4>
          <button class="proto-btn active" id="btn-open-add-harvest-modal">
            + Add Harvest
          </button>
        </div>

        <div style="display:flex; flex-direction:column; gap:10px;">
          ${l.products.filter(e=>e.farmerId===`farmer-1`).map(e=>`
            <div style="display:flex; align-items:center; justify-content:space-between; padding:8px 0; border-bottom:1px dashed var(--line);">
              <div style="display:flex; align-items:center; gap:10px;">
                <img src="${e.image}" style="width:42px; height:42px; border-radius:8px; object-fit:cover;" />
                <div>
                  <div style="font-size:13px; font-weight:700;">${e.name}</div>
                  <div style="font-size:11px; color:var(--ink-soft);">
                    Stock: <strong>${e.stockAvailable} units</strong> · ₹${e.price}
                  </div>
                </div>
              </div>

              <button class="proto-btn" data-pause-prod="${e.id}" style="font-size:11px;">
                Active ✓
              </button>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `}function j(){if(!l.activeProductModal)return``;let e=l.activeProductModal,t=l.farmers.find(t=>t.id===e.farmerId)||l.farmers[0],n=l.cart[e.id]||0,r=e.freshness===`today`;return`
    <div class="modal-overlay" id="product-modal-backdrop">
      <div class="modal-sheet" onclick="event.stopPropagation()">
        <div class="sheet-handle"></div>
        <button class="btn-close-modal" id="btn-close-product-modal">
          ${u(`close`,18)}
        </button>

        <div class="product-detail-hero">
          <img src="${e.image}" alt="${e.name}" />
        </div>

        <div class="product-detail-body">
          <div class="detail-tags-row">
            <span class="freshness-stamp ${r?`today`:`yesterday`}" style="position:static;">
              ${u(`clock`,12)} ${d(r?`pickedToday`:`pickedYesterday`)} (${e.harvestTime})
            </span>
            <span class="farm-trust-badge" style="font-size:11px;">Batch #${e.batchNo}</span>
          </div>

          <h2 class="detail-title">${l.lang===`en`?e.name:e.hindiName}</h2>
          <p style="font-size:12.5px; color:var(--ink-soft); margin-top:4px;">
            ${l.lang===`en`?e.description:e.hindiDescription}
          </p>

          <div class="detail-farmer-card" id="detail-farmer-click" data-farmer-id="${t.id}">
            <div class="detail-farmer-left">
              <img src="${t.avatar}" alt="${t.name}" class="detail-farmer-avatar" />
              <div>
                <div style="font-size:14px; font-weight:700; color:var(--ink);">${l.lang===`en`?t.name:t.hindiName}</div>
                <div style="font-size:11px; color:var(--ink-soft);">${l.lang===`en`?t.farmName:t.hindiFarmName} · ${t.distance}</div>
                <div style="font-size:11px; color:var(--harvest-orange); font-weight:700;">★ ${t.rating} (142 reviews) · Verified KYC ✓</div>
              </div>
            </div>
            <div style="font-size:12px; font-weight:700; color:var(--forest); display:flex; align-items:center; gap:4px;">
              ${d(`visitFarm`)} ${u(`chevronRight`,14)}
            </div>
          </div>

          <div class="facts-row">
            <div class="fact-box">
              <div class="label">${d(`acres`)}</div>
              <div class="value">${t.size}</div>
            </div>
            <div class="fact-box">
              <div class="label">${d(`yearsFarming`)}</div>
              <div class="value">${t.years}</div>
            </div>
            <div class="fact-box">
              <div class="label">${d(`harvestTime`)}</div>
              <div class="value">${e.harvestTime.split(`,`)[1]||`6:15 AM`}</div>
            </div>
          </div>

          <div class="batch-notes-box">
            <h4>${u(`shieldCheck`,16)} ${d(`batchTraceability`)}</h4>
            <p>
              ${l.lang===`en`?e.growingMethod:e.hindiGrowingMethod}. 
              ${l.lang===`en`?`Harvested from block #2 of Patel Organic Farms. Soil test verified: zero chemical residues, rich natural vermicompost fertility.`:`खेत के ब्लॉक नंबर 2 से ताज़ी कटाई। मिट्टी परीक्षण प्रमाणित: शून्य रासायनिक अवशेष, प्राकृतिक वर्मीकम्पोस्ट खाद से पोषित।`}
            </p>
          </div>
        </div>

        <div class="detail-sticky-bar">
          <div class="detail-price-stack">
            <div class="price">₹${e.price}</div>
            <div class="unit">/${e.unit}</div>
          </div>

          <div style="display:flex; align-items:center; gap:12px;">
            ${n===0?`
              <button class="btn-primary" id="btn-modal-add-cart" data-add-prod="${e.id}">
                ${u(`shoppingBag`,16)} ${d(`addToCart`)}
              </button>
            `:`
              <div class="mini-stepper" style="height:42px; border-radius:var(--radius-md);">
                <button data-dec-prod="${e.id}" style="width:36px; font-size:18px;">−</button>
                <span style="min-width:32px; font-size:14px;">${n} in basket</span>
                <button data-inc-prod="${e.id}" style="width:36px; font-size:18px;">+</button>
              </div>
            `}
          </div>
        </div>
      </div>
    </div>
  `}function M(){if(!l.activeFarmerModal)return``;let e=l.activeFarmerModal,t=l.products.filter(t=>t.farmerId===e.id);return`
    <div class="modal-overlay" id="farmer-modal-backdrop">
      <div class="modal-sheet" onclick="event.stopPropagation()">
        <div class="sheet-handle"></div>
        <button class="btn-close-modal" id="btn-close-farmer-modal">
          ${u(`close`,18)}
        </button>

        <div style="position:relative; width:100%; height:160px; overflow:hidden;">
          <img src="${e.banner}" style="width:100%; height:100%; object-fit:cover;" />
          <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(18,37,26,0.8), transparent);"></div>
        </div>

        <div style="padding:0 20px 80px; position:relative; margin-top:-40px;">
          <div style="display:flex; align-items:flex-end; justify-content:space-between;">
            <img src="${e.avatar}" style="width:80px; height:80px; border-radius:50%; border:3px solid #fff; object-fit:cover; box-shadow:var(--shadow-md);" />
            <button class="proto-btn ${e.isFollowed?`active`:``}" id="btn-toggle-follow-farmer" data-farmer-id="${e.id}">
              ${e.isFollowed?u(`check`,14)+` Following`:`+ Follow Farmer`}
            </button>
          </div>

          <h2 style="font-family:var(--font-serif); font-size:22px; color:var(--forest-dark); margin-top:10px;">
            ${l.lang===`en`?e.name:e.hindiName}
          </h2>
          <div style="font-size:12px; color:var(--ink-soft); margin-top:2px;">
            🌾 ${l.lang===`en`?e.farmName:e.hindiFarmName} · 📍 ${e.location}
          </div>

          <!-- Trust Badges with Penny-Drop Verified Seal -->
          <div style="display:flex; gap:6px; flex-wrap:wrap; margin:10px 0;">
            <span class="penny-drop-badge">${u(`shieldCheck`,12)} Admin KYC Approved</span>
            <span class="penny-drop-badge">${u(`check`,10)} Bank Penny-Drop Verified</span>
            <span class="farm-rating-badge">★ ${e.rating}</span>
          </div>

          <p style="font-size:12.5px; color:var(--ink); line-height:1.5; margin:12px 0;">
            ${l.lang===`en`?e.bio:e.hindiBio}
          </p>

          <div class="facts-row">
            <div class="fact-box">
              <div class="label">Total Land</div>
              <div class="value">${e.size}</div>
            </div>
            <div class="fact-box">
              <div class="label">Experience</div>
              <div class="value">${e.years}</div>
            </div>
            <div class="fact-box">
              <div class="label">Distance</div>
              <div class="value">${e.distance}</div>
            </div>
          </div>

          <h4 style="font-family:var(--font-serif); font-size:16px; color:var(--forest-dark); margin:18px 0 10px;">
            ${l.lang===`en`?`Today's Harvest from this Farm`:`इस खेत से आज की कटाई`}
          </h4>

          <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;">
            ${t.map(e=>`
              <div class="product-card" data-product-id="${e.id}">
                <div class="product-card-thumb-wrap" style="aspect-ratio:1;">
                  <img src="${e.image}" class="product-card-thumb" />
                </div>
                <div style="padding:8px 10px;">
                  <div style="font-size:12px; font-weight:700;">${e.name}</div>
                  <div style="font-size:11px; color:var(--forest); font-weight:700;">₹${e.price} / ${e.unit}</div>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      </div>
    </div>
  `}function N(){if(!l.isKycModalOpen||!l.selectedKycFarmer)return``;let e=l.selectedKycFarmer;return`
    <div class="modal-overlay" id="kyc-modal-backdrop">
      <div class="modal-sheet" onclick="event.stopPropagation()">
        <div class="sheet-handle"></div>
        <button class="btn-close-modal" id="btn-close-kyc-modal">
          ${u(`close`,18)}
        </button>

        <div style="padding:20px 20px 60px;">
          <h2 style="font-family:var(--font-serif); font-size:18px; color:var(--forest-dark); margin-bottom:4px;">
            Confidential KYC Verification Doc
          </h2>
          <div style="font-size:11px; color:var(--ink-soft); margin-bottom:12px;">
            Farmer: <strong>${e.name}</strong> · Expiring Signed URL (15m TTL)
          </div>

          <div class="kyc-watermark-wrap">
            <div class="kyc-watermark">CONFIDENTIAL · FRESHCART AUDIT</div>
            <div style="font-size:13px; font-weight:700; color:var(--forest-dark); margin-bottom:10px;">
              GOVERNMENT OF INDIA VERIFIED RECORD
            </div>

            <div class="kyc-field-row">
              <span>Aadhaar Masked UID:</span>
              <strong style="font-family:monospace;">${e.kyc.aadhaarMasked}</strong>
            </div>
            <div class="kyc-field-row">
              <span>Land Record Extract:</span>
              <strong>${e.kyc.landRecordDoc}</strong>
            </div>
            <div class="kyc-field-row">
              <span>Bank Account:</span>
              <strong style="font-family:monospace;">${e.kyc.bankMasked}</strong>
            </div>
            <div class="kyc-field-row">
              <span>Penny-Drop Match:</span>
              <strong style="color:var(--forest);">${e.kyc.pennyDropStatus}</strong>
            </div>
            <div class="kyc-field-row">
              <span>Encrypted Storage URI:</span>
              <span style="font-family:monospace; font-size:10px;">s3://fc-private-kyc-ap-south-1/</span>
            </div>
          </div>

          <div style="display:flex; gap:10px; margin-top:14px;">
            <button class="btn-primary" id="btn-confirm-approve-kyc" style="flex:1;">
              ${u(`check`,16)} Confirm KYC Verified
            </button>
          </div>
        </div>
      </div>
    </div>
  `}function P(){if(!l.isAddHarvestOpen)return``;let e=Math.round(l.newHarvest.price*.72),t=l.newHarvest.price-e;return`
    <div class="modal-overlay" id="add-harvest-modal-backdrop">
      <div class="modal-sheet" onclick="event.stopPropagation()">
        <div class="sheet-handle"></div>
        <button class="btn-close-modal" id="btn-close-add-harvest">
          ${u(`close`,18)}
        </button>

        <div style="padding:20px 20px 80px;">
          <h2 style="font-family:var(--font-serif); font-size:20px; color:var(--forest-dark); margin-bottom:4px;">
            ${l.lang===`en`?`Add Today’s Morning Harvest`:`आज सुबह की ताज़ा कटाई जोड़ें`}
          </h2>
          <p style="font-size:12px; color:var(--ink-soft); margin-bottom:16px;">
            ${l.lang===`en`?`List fresh vegetables directly for consumers in your delivery zone.`:`सीधे ग्राहकों के लिए अपनी सब्ज़ियों की ताज़ा सूची बनाएं`}
          </p>

          <label style="font-size:12px; font-weight:700; color:var(--forest-dark); display:block; margin-bottom:8px;">
            Select Vegetable Crop
          </label>
          <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:8px; margin-bottom:16px;">
            ${[{name:`Desi Palak`,unit:`500g bunch`,cat:`Leafy`,img:`/images/veg_spinach.jpg`},{name:`Desi Tamatar`,unit:`1 kg`,cat:`Nightshades`,img:`/images/veg_tomatoes.jpg`},{name:`Desi Gajar`,unit:`500g`,cat:`Roots`,img:`/images/veg_carrots.jpg`},{name:`Tender Bhindi`,unit:`500g`,cat:`Gourds`,img:`/images/veg_okra.jpg`},{name:`Pahadi Aloo`,unit:`1 kg`,cat:`Roots`,img:`/images/veg_potatoes.jpg`}].map(e=>`
              <div 
                class="slot-chip ${l.newHarvest.name===e.name?`selected`:``}" 
                data-select-harvest-veg="${e.name}" 
                data-harvest-unit="${e.unit}" 
                data-harvest-cat="${e.cat}"
                data-harvest-img="${e.img}"
                style="flex-direction:column; align-items:center; text-align:center; padding:8px 4px;"
              >
                <img src="${e.img}" style="width:36px; height:36px; border-radius:6px; object-fit:cover; margin-bottom:4px;" />
                <span style="font-size:11px;">${e.name}</span>
              </div>
            `).join(``)}
          </div>

          <div class="slot-select-card" style="margin-bottom:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="font-size:13px;">Harvest Quantity</strong>
                <div style="font-size:11px; color:var(--ink-soft);">${l.newHarvest.unit} units available</div>
              </div>
              <div class="mini-stepper" style="height:36px;">
                <button id="btn-harvest-qty-minus">−</button>
                <span style="min-width:32px;">${l.newHarvest.qty}</span>
                <button id="btn-harvest-qty-plus">+</button>
              </div>
            </div>
          </div>

          <div class="slot-select-card" style="margin-bottom:14px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <div>
                <strong style="font-size:13px;">Your Selling Price</strong>
                <div style="font-size:11px; color:var(--ink-soft);">Price per ${l.newHarvest.unit}</div>
              </div>
              <div class="mini-stepper" style="height:36px;">
                <button id="btn-harvest-price-minus">−</button>
                <span style="min-width:32px;">₹${l.newHarvest.price}</span>
                <button id="btn-harvest-price-plus">+</button>
              </div>
            </div>

            <div style="background:#FFF9ED; border:1px solid #FFE4A0; border-radius:var(--radius-sm); padding:8px 10px; margin-top:10px; font-size:11.5px; color:var(--soil);">
              📊 Mandi Middleman Rate: ~₹${e}. On Freshcart you earn <strong>+₹${t} more per unit (+28%)</strong>!
            </div>
          </div>

          <button class="btn-primary" id="btn-submit-harvest" style="width:100%; height:48px; font-size:15px;">
            ${u(`check`,16)} Publish Today's Harvest (${l.newHarvest.qty} units)
          </button>
        </div>
      </div>
    </div>
  `}function F(){return l.isReportIssueOpen?`
    <div class="modal-overlay" id="issue-modal-backdrop">
      <div class="modal-sheet" onclick="event.stopPropagation()">
        <div class="sheet-handle"></div>
        <button class="btn-close-modal" id="btn-close-issue-modal">
          ${u(`close`,18)}
        </button>

        <div style="padding:20px 20px 60px;">
          <h2 style="font-family:var(--font-serif); font-size:20px; color:var(--forest-dark); margin-bottom:6px;">
            ${l.lang===`en`?`Report a Quality or Delivery Issue`:`गुणवत्ता या डिलीवरी समस्या दर्ज करें`}
          </h2>
          <p style="font-size:12px; color:var(--ink-soft); margin-bottom:16px;">
            ${l.lang===`en`?`Freshcart guarantees 100% farm freshness. Issues reported within 24h are refunded or replaced immediately.`:`24 घंटे के भीतर रिपोर्ट की गई समस्या पर तुरंत रिफंड या रिप्लेसमेंट।`}
          </p>

          <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:16px;">
            <label class="pay-radio-opt selected">
              <input type="radio" name="issueType" checked />
              <span>🍃 Produce damaged or wilted</span>
            </label>
            <label class="pay-radio-opt">
              <input type="radio" name="issueType" />
              <span>⚖️ Incorrect weight or missing item</span>
            </label>
            <label class="pay-radio-opt">
              <input type="radio" name="issueType" />
              <span>⏰ Delivery delay or rider issue</span>
            </label>
          </div>

          <textarea 
            placeholder="Add short note (e.g. spinach was wilted upon arrival)" 
            style="width:100%; height:80px; padding:10px; border-radius:var(--radius-md); border:1px solid var(--line); font-family:var(--font-sans); font-size:12.5px; outline:none; resize:none; margin-bottom:16px;"
          ></textarea>

          <button class="btn-primary" id="btn-confirm-report-issue" style="width:100%;">
            Submit for Instant Refund / Credit (₹187)
          </button>
        </div>
      </div>
    </div>
  `:``}function I(){return l.isGoogleModalOpen?`
    <div class="google-oauth-backdrop" id="google-modal-backdrop">
      <div class="google-oauth-modal" id="google-oauth-dialog" role="dialog" aria-modal="true">
        <!-- Close Button -->
        <button class="google-oauth-close" id="btn-close-google-modal" aria-label="Close Google sign-in">
          ${u(`close`,18)}
        </button>

        ${l.isGoogleLoading?`
          <!-- Loading & Verification State -->
          <div class="google-oauth-loading">
            <div class="google-spinner"></div>
            <div>
              <div style="font-size:16px; font-weight:600; color:#202124; margin-bottom:4px;">
                Connecting to Google Identity Services...
              </div>
              <div style="font-size:12px; color:#5F6368;">
                ${l.googleLoadingStep||`Verifying OAuth 2.0 Identity Token & Keystore Session...`}
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:6px; font-size:11px; color:#1A73E8; background:#E8F0FE; padding:6px 12px; border-radius:16px;">
              ${u(`shieldCheck`,14)} Hardware-backed Keystore Encryption Active
            </div>
          </div>
        `:`
          <!-- Header -->
          <div class="google-oauth-header">
            <div class="google-modal-logo">
              ${u(`google`,32)}
            </div>
            <h2 class="google-oauth-title">Sign in with Google</h2>
            <p class="google-oauth-sub">Choose an account to continue to <strong>Freshcart Farm Direct</strong></p>
          </div>

          <!-- Accounts List -->
          <div class="google-accounts-list">
            ${l.users.map(e=>`
              <div class="google-account-row" data-google-user-id="${e.id}">
                <img src="${e.avatar}" alt="${e.name}" class="google-account-avatar" />
                <div class="google-account-info">
                  <div class="google-account-name">${e.name}</div>
                  <div class="google-account-email">${e.email}</div>
                </div>
                ${u(`chevronRight`,16,`style="color:#5F6368;"`)}
              </div>
            `).join(``)}

            <!-- Use Another Account Option -->
            <div class="google-account-row" id="btn-google-custom-account">
              <div style="width:40px; height:40px; border-radius:50%; background:#F1F3F4; display:flex; align-items:center; justify-content:center; color:#5F6368;">
                ${u(`userPlus`,18)}
              </div>
              <div class="google-account-info">
                <div class="google-account-name">Use another Google account</div>
                <div class="google-account-email">Sign in with custom Google ID</div>
              </div>
              ${u(`chevronRight`,16,`style="color:#5F6368;"`)}
            </div>

            ${l.customGoogleInputOpen?`
              <div style="padding:10px 14px; background:#FAF8F2; border-radius:12px; margin-top:8px; border:1px solid var(--line);">
                <div style="font-size:12px; font-weight:600; color:var(--forest-dark); margin-bottom:6px;">Enter Google Account details:</div>
                <input type="text" id="custom-google-name" class="auth-input" placeholder="Your Name (e.g. Sanya Gupta)" style="margin-bottom:6px; height:36px; padding-left:10px;" />
                <input type="email" id="custom-google-email" class="auth-input" placeholder="sanya.gupta@gmail.com" style="margin-bottom:8px; height:36px; padding-left:10px;" />
                <button class="btn-auth-primary" id="btn-submit-custom-google" style="height:38px; font-size:13px;">
                  Continue with this Google Account
                </button>
              </div>
            `:``}
          </div>

          <!-- Google Scope Disclosure & Footer -->
          <div class="google-oauth-footer">
            To continue, Google will share your name, email address, language preference, and profile picture with Freshcart. See Freshcart's <a href="#" onclick="return false;">Privacy Policy</a> and <a href="#" onclick="return false;">Terms of Service</a>.
          </div>
        `}
      </div>
    </div>
  `:``}function L(e){l.isGoogleLoading=!0,l.googleLoadingStep=`Authenticating ${e.email}...`,B(),setTimeout(()=>{l.googleLoadingStep=`Securing session in Android Hardware Keystore...`,B(),setTimeout(()=>{l.currentUser={...e,provider:`google`,isVerified:!0};let t={id:`sess-google-${Date.now()}`,device:`Google Pixel 8 Pro`,os:`Android 14 · Google GIS OAuth 2.0`,location:`Gurugram, India`,ip:`49.36.128.42 (Masked)`,isCurrent:!0,lastActive:`Active now`};l.sessions.unshift(t),f(`AUTH_GOOGLE_SUCCESS`,e.name,e.email,`info`,`Google OAuth 2.0 token verified. Issued 15-minute JWT, refresh token encrypted in Hardware Keystore (DPDP Act Sec 5).`),l.isGoogleLoading=!1,l.isGoogleModalOpen=!1,l.customGoogleInputOpen=!1,l.currentTab=l.authReturnTab||`home`,m(l.lang===`en`?`✓ Signed in as ${e.name} with Google!`:`✓ Google द्वारा ${e.name} के रूप में सफलतापूर्वक साइन इन किया गया!`),B()},450)},400)}function R(e){let t=l.users.find(t=>t.email.toLowerCase()===e.toLowerCase()||t.phone.includes(e));t||(t={id:`usr-${Date.now()}`,name:e.split(`@`)[0]||`Freshcart User`,email:e.includes(`@`)?e:`${e}@freshcart.in`,phone:e.includes(`@`)?`+91 98765 43210`:e,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80`,address:`Sunrise Enclave, Sector 14, Gurugram`,role:`consumer`,provider:`email`,isVerified:!0},l.users.push(t)),l.currentUser=t,f(`AUTH_PASSWORD_LOGIN`,t.name,t.email,`info`,`Standard password authentication successful. Session issued.`),m(l.lang===`en`?`✓ Welcome back, ${t.name}!`:`✓ वापसी पर स्वागत है, ${t.name}!`),l.currentTab=l.authReturnTab||`home`,B()}function z(e,t,n,r,i){let a={id:`usr-${Date.now()}`,name:e,email:t,phone:n,avatar:`https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80`,address:r,role:i,provider:`email`,isVerified:!0};l.users.unshift(a),l.currentUser=a,l.role=i===`farmer`?`farmer`:`consumer`,f(`AUTH_REGISTER_SUCCESS`,e,t,`info`,`New ${i} account registered under DPDP Act 2023 with verified phone & address.`),m(l.lang===`en`?`✓ Account created successfully! Welcome to Freshcart, ${e}!`:`✓ खाता सफलतापूर्वक बन गया! फ़्रेशकार्ट में स्वागत है, ${e}!`),l.currentTab=`home`,B()}function B(){let e=document.querySelector(`#app`),t=p();e.innerHTML=`
    <!-- Top Prototype Control Bar with 4 RBAC Roles -->
    ${h()}

    <!-- Main Viewport Shell -->
    <div class="app-viewport-wrapper">
      <div class="mobile-phone-frame ${l.frameMode===`expanded`?`expanded`:``}">
        <div class="phone-screen">
          <!-- Status Bar -->
          <div class="phone-status-bar">
            <span class="status-time">08:24</span>
            <div class="phone-notch">
              <div class="notch-camera"></div>
            </div>
            <div class="status-icons">
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          <!-- Toast Banner -->
          ${l.toastMessage?`
            <div class="app-toast">
              <span>${l.toastMessage}</span>
              ${u(`check`,16)}
            </div>
          `:``}

          <!-- Screen Content Area -->
          <div class="app-screen-content" id="app-screen-scroll">
            ${l.currentTab===`auth`?`
              ${E()}
            `:l.role===`consumer`?`
              ${l.currentTab===`home`?`
                ${g()}
                ${_()}
                ${b()}
                ${v()}
                ${y()}
                ${x()}
              `:``}

              ${l.currentTab===`browse`?`
                ${T()}
              `:``}

              ${l.currentTab===`cart`?`
                ${C()}
              `:``}

              ${l.currentTab===`orders`?`
                ${w()}
              `:``}

              ${l.currentTab===`profile`?`
                ${D()}
              `:``}
            `:l.role===`farmer`?`
              ${A()}
            `:l.role===`rider`?`
              ${O()}
            `:`
              ${k()}
            `}
          </div>

          <!-- Floating Basket Bar (Consumer Mode) -->
          ${l.role===`consumer`&&l.currentTab!==`auth`?S():``}

          <!-- Bottom Navigation Tab Bar -->
          ${l.role===`consumer`?`
            <nav class="bottom-tab-bar">
              <button class="tab-item ${l.currentTab===`home`?`active`:``}" data-tab="home">
                ${u(`home`)}
                <span>${d(`navHome`)}</span>
              </button>
              <button class="tab-item ${l.currentTab===`browse`?`active`:``}" data-tab="browse">
                ${u(`search`)}
                <span>${d(`navBrowse`)}</span>
              </button>
              <button class="tab-item ${l.currentTab===`cart`?`active`:``}" data-tab="cart">
                ${u(`shoppingBag`)}
                <span>${d(`navCart`)}</span>
                ${t.itemCount>0?`<span class="tab-badge">${t.itemCount}</span>`:``}
              </button>
              <button class="tab-item ${l.currentTab===`orders`?`active`:``}" data-tab="orders">
                ${u(`package`)}
                <span>${d(`navOrders`)}</span>
                ${l.orders.length>0?`<span class="tab-badge">1</span>`:``}
              </button>
              <button class="tab-item ${l.currentTab===`profile`?`active`:``}" data-tab="profile">
                ${u(`user`)}
                <span>${d(`navProfile`)}</span>
              </button>
            </nav>
          `:l.role===`farmer`?`
            <nav class="bottom-tab-bar">
              <button class="tab-item ${l.farmerTab===`today`?`active`:``}" data-farmer-tab="today">
                ${u(`sun`)}
                <span>Today</span>
              </button>
              <button class="tab-item ${l.farmerTab===`produce`?`active`:``}" data-farmer-tab="produce">
                ${u(`leaf`)}
                <span>Produce</span>
              </button>
              <button class="tab-item ${l.farmerTab===`orders`?`active`:``}" data-farmer-tab="orders">
                ${u(`package`)}
                <span>Orders</span>
              </button>
              <button class="tab-item ${l.farmerTab===`earnings`?`active`:``}" data-farmer-tab="earnings">
                ${u(`trendingUp`)}
                <span>Earnings</span>
              </button>
            </nav>
          `:l.role===`rider`?`
            <nav class="bottom-tab-bar">
              <button class="tab-item active">
                ${u(`truck`)}
                <span>My Drops</span>
              </button>
              <button class="tab-item" id="btn-rider-map-view">
                ${u(`mapPin`)}
                <span>Route</span>
              </button>
              <button class="tab-item" id="btn-rider-history">
                ${u(`package`)}
                <span>Completed</span>
              </button>
            </nav>
          `:`
            <nav class="bottom-tab-bar">
              <button class="tab-item active">
                ${u(`shieldCheck`)}
                <span>Audit & Security</span>
              </button>
              <button class="tab-item" id="btn-admin-view-farmers">
                ${u(`leaf`)}
                <span>Farms</span>
              </button>
              <button class="tab-item" id="btn-admin-view-orders">
                ${u(`package`)}
                <span>Ledger</span>
              </button>
            </nav>
          `}

          <!-- Modals -->
          ${j()}
          ${M()}
          ${P()}
          ${F()}
          ${N()}
          ${I()}
        </div>
      </div>
    </div>
  `,V()}function V(){document.querySelector(`#btn-role-consumer`)?.addEventListener(`click`,()=>{l.role=`consumer`,l.currentTab=`home`,f(`ROLE_SWITCH`,`User`,`Consumer (Priya)`,`info`,`Switched session context to Priya Sharma.`),B()}),document.querySelector(`#btn-role-farmer`)?.addEventListener(`click`,()=>{l.role=`farmer`,f(`ROLE_SWITCH`,`User`,`Farmer (Ramesh)`,`info`,`Switched session context to Ramesh Patel.`),B()}),document.querySelector(`#btn-role-rider`)?.addEventListener(`click`,()=>{l.role=`rider`,f(`ROLE_SWITCH`,`User`,`Rider (Amit)`,`info`,`Switched session context to Rider Amit Kumar.`),B()}),document.querySelector(`#btn-role-admin`)?.addEventListener(`click`,()=>{l.role=`admin`,f(`ROLE_SWITCH`,`User`,`Admin Console`,`security`,`Privileged Admin session activated via MFA policy.`),B()}),document.querySelector(`#btn-toggle-lang`)?.addEventListener(`click`,()=>{l.lang=l.lang===`en`?`hi`:`en`,B()}),document.querySelector(`#header-lang-btn`)?.addEventListener(`click`,()=>{l.lang=l.lang===`en`?`hi`:`en`,B()}),document.querySelector(`#prof-lang-en`)?.addEventListener(`click`,()=>{l.lang=`en`,B()}),document.querySelector(`#prof-lang-hi`)?.addEventListener(`click`,()=>{l.lang=`hi`,B()}),document.querySelector(`#btn-toggle-device`)?.addEventListener(`click`,()=>{l.frameMode=l.frameMode===`normal`?`expanded`:`normal`,B()}),document.querySelector(`#btn-sim-order-step`)?.addEventListener(`click`,()=>{if(l.orders.length>0){let e=l.orders[0],t=[{name:`placed`,title:`Order Placed`},{name:`accepted`,title:`Order Accepted by Farmer`},{name:`packed`,title:`Packed at Farm`},{name:`out_for_delivery`,title:`Out for Delivery`},{name:`delivered`,title:`Delivered Successfully`}],n=(t.findIndex(t=>t.name===e.status)+1)%t.length;e.status=t[n].name,e.timeline.forEach((e,t)=>{e.done=t<=n,e.current=t===n}),l.currentTab=`orders`,f(`ORDER_STATE_TRANSITION`,`Order State Machine`,`Order #${e.id}`,`info`,`State transitioned to ${t[n].title}`),m(`Order status updated: ${t[n].title}!`)}}),document.querySelectorAll(`.tab-item[data-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{l.currentTab=e.dataset.tab,B()})}),document.querySelectorAll(`.tab-item[data-farmer-tab]`).forEach(e=>{e.addEventListener(`click`,()=>{l.farmerTab=e.dataset.farmerTab,B()})}),document.querySelectorAll(`[data-admin-subtab]`).forEach(e=>{e.addEventListener(`click`,()=>{l.adminTab=e.dataset.adminSubtab,B()})}),document.querySelector(`#floating-basket-trigger`)?.addEventListener(`click`,()=>{l.currentTab=`cart`,B()}),document.querySelector(`#btn-cart-browse`)?.addEventListener(`click`,()=>{l.currentTab=`home`,B()});let e=document.querySelector(`#search-input`)||document.querySelector(`#browse-search-input`);e&&e.addEventListener(`input`,e=>{l.searchQuery=e.target.value,B();let t=document.querySelector(`#search-input`)||document.querySelector(`#browse-search-input`);t&&(t.focus(),t.setSelectionRange(t.value.length,t.value.length))}),document.querySelector(`#clear-search`)?.addEventListener(`click`,()=>{l.searchQuery=``,B()}),document.querySelectorAll(`[data-cat]`).forEach(e=>{e.addEventListener(`click`,()=>{l.selectedCategory=e.dataset.cat,B()})}),document.querySelectorAll(`[data-promo]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.promo;m(t===`flash`?l.lang===`en`?`🎟️ Promo FRESH35 copied! 35% discount applied at checkout.`:`🎟️ प्रोमो FRESH35 लागू! 35% छूट चेकआउट पर मिलेगी।`:t===`express`?l.lang===`en`?`⚡ 15-25 Mins Express Courier active for your location!`:`⚡ 15-25 मिनट एक्सप्रेस कोरियर आपके पते पर सक्रिय है!`:l.lang===`en`?`🛡️ 100% MSP paid directly to verified farmers via UPI.`:`🛡️ किसानों को 100% सीधा भुगतान यूपीआई द्वारा!`)})}),document.querySelectorAll(`[data-add-prod]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.addProd;l.cart[n]=(l.cart[n]||0)+1,m(l.lang===`en`?`Item added to basket!`:`सब्ज़ी टोकरी में जुड़ी!`)})}),document.querySelectorAll(`[data-inc-prod]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.incProd;l.cart[n]=(l.cart[n]||0)+1,B()})}),document.querySelectorAll(`[data-dec-prod]`).forEach(e=>{e.addEventListener(`click`,t=>{t.stopPropagation();let n=e.dataset.decProd;l.cart[n]>1?l.cart[n]--:delete l.cart[n],B()})}),document.querySelectorAll(`.slot-chip[data-slot-id]`).forEach(e=>{e.addEventListener(`click`,()=>{l.selectedSlotId=e.dataset.slotId,B()})}),document.querySelectorAll(`input[name="payment"]`).forEach(e=>{e.addEventListener(`change`,()=>{l.paymentMode=e.value,B()})}),document.querySelector(`#dpdp-consent-chk`)?.addEventListener(`change`,e=>{l.dpdpConsent=e.target.checked}),document.querySelectorAll(`.product-card[data-product-id]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.productId;l.activeProductModal=l.products.find(e=>e.id===t),B()})}),document.querySelectorAll(`.farm-card[data-farmer-id], #detail-farmer-click[data-farmer-id]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.farmerId;l.activeFarmerModal=l.farmers.find(e=>e.id===t),l.activeProductModal=null,B()})}),document.querySelector(`#btn-close-product-modal`)?.addEventListener(`click`,()=>{l.activeProductModal=null,B()}),document.querySelector(`#product-modal-backdrop`)?.addEventListener(`click`,e=>{e.target.id===`product-modal-backdrop`&&(l.activeProductModal=null,B())}),document.querySelector(`#btn-close-farmer-modal`)?.addEventListener(`click`,()=>{l.activeFarmerModal=null,B()}),document.querySelector(`#farmer-modal-backdrop`)?.addEventListener(`click`,e=>{e.target.id===`farmer-modal-backdrop`&&(l.activeFarmerModal=null,B())}),document.querySelector(`#btn-toggle-follow-farmer`)?.addEventListener(`click`,e=>{let t=e.currentTarget.dataset.farmerId,n=l.farmers.find(e=>e.id===t);n&&(n.isFollowed=!n.isFollowed,f(`FARMER_FOLLOW_TOGGLE`,`Priya Sharma`,n.name,`info`,`Notification alert state: ${n.isFollowed}`),m(n.isFollowed?`You will now receive alerts when ${n.name} harvests!`:`Unfollowed ${n.name}`))}),document.querySelector(`#btn-place-order`)?.addEventListener(`click`,()=>{let{total:e,items:t}=p();if(t.length===0)return;if(!l.dpdpConsent){m(`Please check DPDP Act 2023 Consent to proceed.`);return}let n=`fc_ord_idem_${Date.now()}`,r=`FC-${Math.floor(1e3+Math.random()*9e3)}`,i={id:r,placedAt:`Just now`,slot:`Tomorrow Morning: 7:00 AM – 9:00 AM`,farmerId:t[0].product.farmerId,farmerName:`Ramesh Patel`,farmerPhone:`+91 98234 ••••2`,farmerPhoneRaw:`+91 98234 51092`,riderName:`Amit Kumar`,riderVehicle:`Hero EV · DL 03 AX 4812`,riderPhone:`+91 98102 ••••1`,riderPhoneRaw:`+91 98102 99401`,customerName:`Priya Sharma`,customerPhone:`+91 98765 ••••0`,customerPhoneRaw:`+91 98765 43210`,deliveryOtp:String(Math.floor(1e3+Math.random()*9e3)),status:`placed`,idempotencyKey:n,items:t.map(e=>({name:e.product.name,qty:e.qty,unit:e.product.unit,price:e.product.price})),bill:{subtotal:e-30,deliveryFee:20,farmerSupportFee:10,packagingFee:0,total:e},paymentMode:l.paymentMode===`upi`?`UPI (Tokenized Razorpay Gateway)`:`Cash on Delivery (Ledger Reconciled)`,deliveryAddress:`Flat A-402, Sunrise Enclave, Sector 14`,timeline:[{step:`Order Placed`,time:`Just now`,done:!0,current:!0,desc:`Idempotency validated & routed`},{step:`Order Accepted`,time:`Pending`,done:!1,desc:`Farmer will confirm availability within 10 mins`},{step:`Freshly Packed`,time:`Pending`,done:!1,desc:`Packed directly in farm eco-crate`},{step:`Out for Delivery`,time:`Pending`,done:!1,desc:`Rider picks up from farm with masked relay`},{step:`Delivered`,time:`Pending`,done:!1,desc:`Doorstep delivery with OTP verification`}]};l.orders.unshift(i),l.cart={},l.currentTab=`orders`,f(`ORDER_PLACED_IDEMPOTENT`,`Consumer (Priya)`,`Order #${r}`,`info`,`Idempotency-Key ${n} locked. Total: ₹${e}`),f(`DPDP_CONSENT_CAPTURED`,`Priya Sharma`,`Order Processing`,`info`,`DPDP Act 2023 Purpose Limitation consent recorded for Order #`+r),m(l.lang===`en`?`🎉 Order Placed Securely! Tracking Live...`:`🎉 ऑर्डर सुरक्षित पक्का हुआ! लाइव ट्रैकिंग शुरू...`)}),document.querySelector(`#btn-call-rider-proxy`)?.addEventListener(`click`,()=>{f(`PROXY_CALL_INITIATED`,`Priya Sharma`,`Rider Amit Kumar`,`info`,`Virtual proxy relay dialed. Real phone numbers remained unexposed.`),m(`📞 Dialing Rider via Virtual Proxy (+91 11-4091-XXXX) · Real numbers masked`)}),document.querySelector(`#btn-call-farmer-proxy`)?.addEventListener(`click`,()=>{f(`PROXY_CALL_INITIATED`,`Priya Sharma`,`Farmer Ramesh Patel`,`info`,`Virtual proxy relay dialed. Real phone numbers remained unexposed.`),m(`📞 Dialing Farmer via Virtual Proxy (+91 11-4091-XXXX) · Real numbers masked`)}),document.querySelector(`#btn-rider-call-proxy`)?.addEventListener(`click`,()=>{f(`PROXY_CALL_INITIATED`,`Rider Amit`,`Customer Priya`,`info`,`Rider connected to customer via Freshcart secure relay.`),m(`📞 Connected to Customer via Secure Relay · Number Masked`)}),document.querySelector(`#rider-otp-input`)?.addEventListener(`input`,e=>{l.riderOtpInput=e.target.value}),document.querySelector(`#btn-rider-verify-otp`)?.addEventListener(`click`,()=>{let e=l.orders[0];e&&l.riderOtpInput===e.deliveryOtp?(e.status=`delivered`,e.timeline.forEach(e=>e.done=!0),e.timeline[4].current=!0,l.riderOtpInput=``,f(`DELIVERY_CONFIRMED_OTP`,`Rider Amit Kumar`,`Order #${e.id}`,`security`,`Delivery OTP ${e.deliveryOtp} verified. Payout queued in ledger.`),m(`✓ OTP Verified! Delivery Completed Successfully!`),B()):(f(`OTP_MISMATCH_ALERT`,`Rider Amit`,`Order #${e?.id}`,`denied`,`Incorrect OTP entered.`),m(`❌ Invalid OTP! Check code with customer.`))}),document.querySelector(`#btn-download-my-data`)?.addEventListener(`click`,()=>{let e={user:{name:`Priya Sharma`,phone:`+91 98765 ••••0`,address:`Flat A-402, Sunrise Enclave, Sector 14`,dpdpConsentVersion:`2026.1`},orderHistory:l.orders.map(e=>({id:e.id,date:e.placedAt,total:e.bill.total,status:e.status,items:e.items})),exportTimestamp:new Date().toISOString(),compliance:`India Digital Personal Data Protection Act, 2023`},t=new Blob([JSON.stringify(e,null,2)],{type:`application/json`}),n=URL.createObjectURL(t),r=document.createElement(`a`);r.href=n,r.download=`freshcart_user_data_priya_${Date.now()}.json`,r.click(),URL.revokeObjectURL(n),f(`DPDP_DATA_EXPORTED`,`Priya Sharma`,`User Profile`,`info`,`Sanitized JSON data export generated.`),m(`✓ Your data export has been downloaded.`)}),document.querySelector(`#btn-request-erasure`)?.addEventListener(`click`,()=>{confirm(`Request Account & Data Erasure under DPDP Act 2023? Your order records will be anonymized within 7 days.`)&&(f(`DPDP_ERASURE_REQUESTED`,`Priya Sharma`,`Account & PII`,`security`,`Formal erasure request filed. Scheduled for anonymization within SLA.`),m(`✓ Erasure request recorded with Data Protection Officer (Ref: #ER-8941)`))}),document.querySelectorAll(`[data-revoke-session]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.revokeSession;l.sessions=l.sessions.filter(e=>e.id!==t),f(`SESSION_REVOKED`,`Priya Sharma`,`Session ${t}`,`security`,`Remote device session revoked. JWT blacklisted.`),m(`✓ Remote device signed out and revoked!`),B()})}),document.querySelector(`#btn-signout-all-devices`)?.addEventListener(`click`,()=>{l.sessions=l.sessions.filter(e=>e.isCurrent),f(`ALL_SESSIONS_REVOKED`,`Priya Sharma`,`All Remote Devices`,`security`,`All non-current sessions terminated.`),m(`✓ Signed out of all other devices!`),B()}),document.querySelectorAll(`[data-preview-kyc]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.previewKyc;l.selectedKycFarmer=l.farmers.find(e=>e.id===t),l.isKycModalOpen=!0,f(`KYC_DOCUMENT_VIEWED`,`Admin (A. Verma)`,l.selectedKycFarmer.name,`security`,`Expiring signed S3 link accessed with watermarked audit overlay.`),B()})}),document.querySelector(`#btn-close-kyc-modal`)?.addEventListener(`click`,()=>{l.isKycModalOpen=!1,B()}),document.querySelector(`#kyc-modal-backdrop`)?.addEventListener(`click`,e=>{e.target.id===`kyc-modal-backdrop`&&(l.isKycModalOpen=!1,B())}),document.querySelector(`#btn-confirm-approve-kyc`)?.addEventListener(`click`,()=>{l.isKycModalOpen=!1,f(`KYC_RE_VERIFIED`,`Admin`,l.selectedKycFarmer?.name,`security`,`KYC and penny-drop bank match approved.`),m(`✓ Farmer KYC verified and approved for direct catalog listing!`)}),document.querySelector(`#btn-report-issue`)?.addEventListener(`click`,()=>{l.isReportIssueOpen=!0,B()}),document.querySelector(`#btn-close-issue-modal`)?.addEventListener(`click`,()=>{l.isReportIssueOpen=!1,B()}),document.querySelector(`#issue-modal-backdrop`)?.addEventListener(`click`,e=>{e.target.id===`issue-modal-backdrop`&&(l.isReportIssueOpen=!1,B())}),document.querySelector(`#btn-confirm-report-issue`)?.addEventListener(`click`,()=>{l.isReportIssueOpen=!1,f(`REFUND_REQUESTED`,`Priya Sharma`,`Order #FC-9428`,`security`,`Refund for ₹187 requested. Amount < ₹500 auto-approved threshold.`),m(l.lang===`en`?`✓ Refund of ₹187 credited to your account!`:`✓ ₹187 का रिफंड आपके खाते में जमा कर दिया गया!`)}),document.querySelector(`#btn-farmer-accept-order`)?.addEventListener(`click`,()=>{l.orders.length>0&&(l.orders[0].status=`accepted`,l.orders[0].timeline[1].done=!0,l.orders[0].timeline[1].current=!0,f(`ORDER_ACCEPTED_FARMER`,`Farmer Ramesh`,`Order #FC-9428`,`info`,`Farmer confirmed harvest availability.`),m(`Order #FC-9428 Accepted by Farmer Ramesh!`))}),document.querySelector(`#btn-farmer-pack-order`)?.addEventListener(`click`,()=>{l.orders.length>0&&(l.orders[0].status=`packed`,l.orders[0].timeline[2].done=!0,l.orders[0].timeline[2].current=!0,f(`ORDER_PACKED_FARMER`,`Farmer Ramesh`,`Order #FC-9428`,`info`,`Produce packed in eco-friendly crate.`),m(`Order #FC-9428 marked as Freshly Packed!`))});let t=()=>{l.isAddHarvestOpen=!0,B()};document.querySelector(`#btn-farmer-add-harvest`)?.addEventListener(`click`,t),document.querySelector(`#btn-open-add-harvest-modal`)?.addEventListener(`click`,t),document.querySelector(`#btn-close-add-harvest`)?.addEventListener(`click`,()=>{l.isAddHarvestOpen=!1,B()}),document.querySelector(`#add-harvest-modal-backdrop`)?.addEventListener(`click`,e=>{e.target.id===`add-harvest-modal-backdrop`&&(l.isAddHarvestOpen=!1,B())}),document.querySelectorAll(`[data-select-harvest-veg]`).forEach(e=>{e.addEventListener(`click`,()=>{l.newHarvest.name=e.dataset.selectHarvestVeg,l.newHarvest.unit=e.dataset.harvestUnit,l.newHarvest.category=e.dataset.harvestCat,l.newHarvest.image=e.dataset.harvestImg,B()})}),document.querySelector(`#btn-harvest-qty-plus`)?.addEventListener(`click`,()=>{l.newHarvest.qty+=5,B()}),document.querySelector(`#btn-harvest-qty-minus`)?.addEventListener(`click`,()=>{l.newHarvest.qty>5&&(l.newHarvest.qty-=5),B()}),document.querySelector(`#btn-harvest-price-plus`)?.addEventListener(`click`,()=>{l.newHarvest.price+=2,B()}),document.querySelector(`#btn-harvest-price-minus`)?.addEventListener(`click`,()=>{l.newHarvest.price>10&&(l.newHarvest.price-=2),B()}),document.querySelector(`#btn-submit-harvest`)?.addEventListener(`click`,()=>{let e={id:`prod-${Date.now()}`,name:`${l.newHarvest.name} (Fresh Harvest)`,hindiName:l.newHarvest.name,category:l.newHarvest.category,hindiCategory:l.newHarvest.category,price:l.newHarvest.price,mandiPrice:Math.round(l.newHarvest.price*.72),unit:l.newHarvest.unit,farmerId:`farmer-1`,freshness:`today`,harvestTime:`Today, 8:15 AM`,batchNo:`FC-${Math.floor(900+Math.random()*99)}`,stockAvailable:l.newHarvest.qty,image:l.newHarvest.image,growingMethod:`Jeevamrut natural compost, freshly harvested`,hindiGrowingMethod:`जीवामृत खाद व प्राकृतिक सिंचाई`,description:`Freshly harvested ${l.newHarvest.name} listed directly by farmer Ramesh. Guaranteed crisp and chemical free.`,hindiDescription:`किसान रमेश द्वारा आज सुबह सीधे तोड़ी गई ताज़ी फसल।`};l.products.unshift(e),l.isAddHarvestOpen=!1,f(`BATCH_LISTED_FARMER`,`Farmer Ramesh`,`${l.newHarvest.name} (${l.newHarvest.qty} units)`,`info`,`Listed at ₹${l.newHarvest.price}/${l.newHarvest.unit}`),m(`✓ Published ${l.newHarvest.qty} units of ${l.newHarvest.name} to consumers!`)});let n=()=>{l.authReturnTab=l.currentTab===`auth`?`home`:l.currentTab,l.currentTab=`auth`,B()};document.querySelector(`#header-auth-trigger`)?.addEventListener(`click`,n),document.querySelector(`#proto-auth-btn`)?.addEventListener(`click`,n),document.querySelector(`#btn-auth-back`)?.addEventListener(`click`,()=>{l.currentTab=l.authReturnTab||`home`,B()}),document.querySelector(`#btn-auth-tab-login`)?.addEventListener(`click`,()=>{l.authMode=`login`,B()}),document.querySelector(`#btn-auth-tab-register`)?.addEventListener(`click`,()=>{l.authMode=`register`,B()}),document.querySelector(`#btn-auth-toggle-mode`)?.addEventListener(`click`,()=>{l.authMode=l.authMode===`login`?`register`:`login`,B()}),document.querySelector(`#btn-toggle-password-visibility`)?.addEventListener(`click`,()=>{l.isPasswordVisible=!l.isPasswordVisible,B();let e=document.querySelector(`#auth-password`);e&&e.focus()}),document.querySelector(`#reg-role-consumer`)?.addEventListener(`click`,()=>{l.regRole=`consumer`,B()}),document.querySelector(`#reg-role-farmer`)?.addEventListener(`click`,()=>{l.regRole=`farmer`,B()}),document.querySelectorAll(`[data-quick-user]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.quickUser,n=l.users.find(e=>e.id===t);n&&R(n.email)})});let r=()=>{if(l.authMode===`login`){let e=document.querySelector(`#auth-login-id`),t=e?e.value.trim():``;if(!t){m(`Please enter your email or mobile number.`);return}R(t)}else{let e=document.querySelector(`#auth-reg-name`)?.value.trim()||`Freshcart User`,t=document.querySelector(`#auth-reg-email`)?.value.trim()||`user@freshcart.in`,n=document.querySelector(`#auth-reg-phone`)?.value.trim()||`+91 98765 00000`,r=document.querySelector(`#auth-reg-address`)?.value.trim()||`Sunrise Enclave, Sector 14`;if(!document.querySelector(`#auth-dpdp-consent`)?.checked){m(`Please consent to DPDP Act 2023 terms to create an account.`);return}z(e,t,n,r,l.regRole)}};document.querySelector(`#btn-auth-submit`)?.addEventListener(`click`,r),document.querySelector(`#auth-main-form`)?.addEventListener(`submit`,e=>{e.preventDefault(),r()}),document.querySelector(`#btn-forgot-password`)?.addEventListener(`click`,()=>{m(l.lang===`en`?`✓ Password reset OTP sent to your registered contact!`:`✓ आपके पंजीकृत संपर्क पर पासवर्ड रीसेट OTP भेजा गया!`)});let i=()=>{l.isGoogleModalOpen=!0,l.isGoogleLoading=!1,l.customGoogleInputOpen=!1,B()};document.querySelector(`#btn-google-signin-action`)?.addEventListener(`click`,i),document.querySelector(`#btn-profile-google-login`)?.addEventListener(`click`,i),document.querySelector(`#btn-close-google-modal`)?.addEventListener(`click`,()=>{l.isGoogleModalOpen=!1,l.isGoogleLoading=!1,B()}),document.querySelector(`#google-modal-backdrop`)?.addEventListener(`click`,e=>{e.target.id===`google-modal-backdrop`&&(l.isGoogleModalOpen=!1,l.isGoogleLoading=!1,B())}),document.querySelectorAll(`[data-google-user-id]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.googleUserId,n=l.users.find(e=>e.id===t);n&&L(n)})}),document.querySelector(`#btn-google-custom-account`)?.addEventListener(`click`,()=>{l.customGoogleInputOpen=!l.customGoogleInputOpen,B()}),document.querySelector(`#btn-submit-custom-google`)?.addEventListener(`click`,()=>{let e=document.querySelector(`#custom-google-name`)?.value.trim()||`Google User`,t=document.querySelector(`#custom-google-email`)?.value.trim();if(!t||!t.includes(`@`)){m(`Please enter a valid Google email address.`);return}let n={id:`usr-google-${Date.now()}`,name:e,email:t,phone:`+91 98112 00000`,avatar:`https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80`,address:`Sunrise Enclave, Sector 14, Gurugram`,role:`consumer`,provider:`google`,isVerified:!0};l.users.unshift(n),L(n)}),document.querySelector(`#btn-profile-open-login`)?.addEventListener(`click`,()=>{l.authReturnTab=`profile`,l.currentTab=`auth`,B()}),document.querySelector(`#btn-profile-switch-account`)?.addEventListener(`click`,()=>{l.authReturnTab=`profile`,l.currentTab=`auth`,B()}),document.querySelector(`#btn-profile-signout`)?.addEventListener(`click`,()=>{f(`AUTH_LOGOUT`,l.currentUser?l.currentUser.name:`User`,l.currentUser?l.currentUser.email:``,`info`,`User explicitly signed out. Active session invalidated.`),l.currentUser=null,l.currentTab=`auth`,m(l.lang===`en`?`✓ You have been signed out safely.`:`✓ आप सुरक्षित रूप से लॉग आउट हो गए हैं।`),B()})}B();