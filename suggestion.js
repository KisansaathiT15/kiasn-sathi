function suggestCrop() {
    const district = document.getElementById("district").value;
    const resultDiv = document.getElementById("result");

    if (!district) {
        resultDiv.innerHTML = `<p style="color: red;">Please select a district.</p>`;
        return;
    }

    // Crop suggestions with additional investment, profit, and cultivation steps mapped by district
    const cropSuggestions = {
        "Adilabad": {
            crop: "Cotton",
            investment: "₹25,000 per acre",
            profit: "₹40,000 per acre",
            tutorial: [
                "1. Prepare the land by plowing and harrowing.",
                "2. Sow cotton seeds in rows with proper spacing.",
                "3. Irrigate regularly, ensuring the soil remains moist.",
                "4. Apply pesticides and fertilizers as recommended.",
                "5. Harvest the cotton once it reaches maturity.",
                "6. Dry and pack the cotton for sale."
            ]
        },
        "Bhadradri Kothagudem": {
            crop: "Chilli",
            investment: "₹20,000 per acre",
            profit: "₹35,000 per acre",
            tutorial: [
                "1. Prepare the land and make raised beds.",
                "2. Sow chilli seeds in the beds and cover with light soil.",
                "3. Water the plants regularly and ensure proper sunlight.",
                "4. Apply organic or chemical fertilizers for growth.",
                "5. Protect the plants from pests and diseases.",
                "6. Harvest the chillies when they turn red."
            ]
        },
        "Hyderabad": {
            crop: "Vegetables (Urban Farming)",
            investment: "₹15,000 per acre",
            profit: "₹25,000 per acre",
            tutorial: [
                "1. Choose the right vegetables for urban farming (e.g., tomatoes, lettuce, spinach).",
                "2. Prepare the soil with compost and organic matter.",
                "3. Sow the seeds and ensure proper watering and sunlight.",
                "4. Fertilize periodically and manage pests organically.",
                "5. Harvest the vegetables when they are fully grown."
            ]
        },
        "Jangaon": {
            crop: "cotton",
            investment: "₹55,000 - ₹75,000 per acre",
            profit: "₹25,000 - ₹60,000 per acre",
            tutorial: [
                "1. Prepare the land by plowing and harrowing.",
                "2. Sow cotton seeds in rows with proper spacing.",
                "3. Irrigate regularly, ensuring the soil remains moist.",
                "4. Apply pesticides and fertilizers as recommended.",
                "5. Harvest the cotton once it reaches maturity.",
                "6. Dry and pack the cotton for sale."
            ]
        },
        "Jayashankar Bhupalpally": {
            crop: "pulses",
            investment: "₹20,000 - ₹35,000 per acre",
            profit: "₹30,000 - ₹70,000 per acre",
            tutorial: [
                "1. Plow the land 2–3 times to remove weeds and break soil clumps.",
                "2. Sow seeds at proper spacing (e.g., 30–45 cm rows) at the beginning of the season.",
                "3. Keep the field weed-free for the first 30–40 days using manual weeding or intercultivation.",
                "4. Monitor for pests like pod borer and aphids; use neem-based or approved pesticides if needed.",
                "5. Harvest when leaves turn yellow and pods dry.",
                "6. Dry the harvested plants in the sun, then thresh and clean the grains for storage or sale."
            ]
        },
         "Jogulamba Gadwal": {
            crop: "cotton",
            investment: "₹70,000 - ₹95,000 per acre",
            profit: "₹10,000 - ₹40,000 per acre",
            tutorial: [
                "1. Prepare the land by plowing and harrowing.",
                "2. Sow cotton seeds in rows with proper spacing.",
                "3. Irrigate regularly, ensuring the soil remains moist.",
                "4. Apply pesticides and fertilizers as recommended.",
                "5. Harvest the cotton once it reaches maturity.",
                "6. Dry and pack the cotton for sale."
            ]
        },
        "Kamareddy": {
            crop: "Maize",
            investment: "₹30,000 - ₹45,000 per acre",
            profit: "₹20,000 - ₹55,000 per acre",
            tutorial: [
                "1. Plow the field 2–3 times and level it to create a fine seedbed.",
                "2. Best sowing time: beginning of monsoon or early Rabi season.",
                "3. Irrigate immediately after sowing, then at critical stages (knee-high, tasseling, grain filling).",
                "4. Monitor for pests like stem borer and fall armyworm; use approved insecticides or biological control.",
                "5. Harvest when husks turn brown and grains are hard (moisture ~20%).",
                "6. Dry cobs under sunlight, then shell and store grains in dry conditions."
            ]
        },
        "karimnagar": {
            crop: "cotton",
            investment: "₹65,000 - ₹90,000 per acre",
            profit: "₹15,000 - ₹55,000 per acre",
            tutorial: [
                "1. Prepare the land by plowing and harrowing.",
                "2. Sow cotton seeds in rows with proper spacing.",
                "3. Irrigate regularly, ensuring the soil remains moist.",
                "4. Apply pesticides and fertilizers as recommended.",
                "5. Harvest the cotton once it reaches maturity.",
                "6. Dry and pack the cotton for sale."
            ]
        },
        "Khammam": {
            crop: "Pulses",
            investment: "₹15,000 - ₹25,000 per acre",
            profit: "₹25,000 - ₹65,000 per acre",
            tutorial: [
               "1. Plow the land 2–3 times to remove weeds and break soil clumps.",
                "2. Sow seeds at proper spacing (e.g., 30–45 cm rows) at the beginning of the season.",
                "3. Keep the field weed-free for the first 30–40 days using manual weeding or intercultivation.",
                "4. Monitor for pests like pod borer and aphids; use neem-based or approved pesticides if needed.",
                "5. Harvest when leaves turn yellow and pods dry.",
                "6. Dry the harvested plants in the sun, then thresh and clean the grains for storage or sale."
            ]
        },
        "Mahabubabad": {
            crop: "pulses",
            investment: "₹15,000 - ₹25,000 per acre",
            profit: "₹25,000 - ₹55,000 per acre",
            tutorial: [
               "1. Plow the land 2–3 times to remove weeds and break soil clumps.",
                "2. Sow seeds at proper spacing (e.g., 30–45 cm rows) at the beginning of the season.",
                "3. Keep the field weed-free for the first 30–40 days using manual weeding or intercultivation.",
                "4. Monitor for pests like pod borer and aphids; use neem-based or approved pesticides if needed.",
                "5. Harvest when leaves turn yellow and pods dry.",
                "6. Dry the harvested plants in the sun, then thresh and clean the grains for storage or sale."
            ]
        },
        "Mahabubnagar": {
            crop: "Groundnut",
            investment: "₹25,000 - ₹30,000 per acre",
            profit: "₹30,000 - ₹57,000 per acre",
            tutorial: [
               "1. Ensure proper drainage and level the land for uniform sowing.",
                "2. Sow seeds 5–6 cm deep with 30–45 cm row spacing and 10–15 cm between seeds.",
                "3. Apply gypsum (calcium source) and basal fertilizers (NPK as required).",
                "4. Monitor for pests like leaf miner and aphids; use neem extract or recommended pesticides.",
                "5. Harvest when leaves turn yellow and pods mature (shells hard, kernels dry).",
                "6. Uproot plants, dry under sun, and separate pods for storage or sale.",
            ]
        },
        "Mancherial": {
            crop: "Red gram",
            investment: "₹25,000 - ₹35,000 per acre",
            profit: "₹30,000 - ₹50,000 per acre",
            tutorial: [
               "1. Incorporate organic manure (like farmyard manure) before sowing.",
                "2. Sow at 60–75 cm row spacing and 20–30 cm plant spacing.",
                "3. Apply a starter dose of fertilizer (e.g., 20:50:0 NPK per acre).",
                "4. Weed the field at 20 and 45 days after sowing.",
                "5. Harvest when 75–80% of pods turn brown and dry.",
                "6. Cut plants, dry under the sun, and thresh to collect the grains.",
            ]
        },
        "Mancherial": {
            crop: "Red gram",
            investment: "₹25,000 - ₹35,000 per acre",
            profit: "₹30,000 - ₹50,000 per acre",
            tutorial: [
               "1. Plow the land 2–3 times to achieve a fine tilth and good drainage.",
                "2.  Sow at 60–75 cm row spacing and 20–30 cm plant spacing.",
                "3. Apply a starter dose of fertilizer (e.g., 20:50:0 NPK per acre).",
                "4.Weed the field at 20 and 45 days after sowing.",
                "5.Harvest when 75–80% of pods turn brown and dry.",
                "6. Cut plants, dry under the sun, and thresh to collect the grains.",
            ]
        },      
        
        "Medak": {
            crop: "Suger cane",
            investment: "₹58,000 - ₹60,000 per acre",
            profit: "₹54,000 - ₹82,000 per acre",
            tutorial: [
               "1. Prepare ridges and furrows (usually 90–120 cm apart) for proper drainage.",
                "2.  Use healthy 2–3 budded setts (cuttings) from high-yielding varieties.",
                "3. Apply fertilizers in split doses (e.g., NPK ratio: 150:60:60 kg/ha).",
                "4.Perform hoeing or intercultivation during the early growth phase.",
                "5.Harvest when canes mature (usually 10–12 months after planting).",
                "6.Cut at ground level and transport promptly to the mill.",
            ]
        },       
         "Medchal Malkajgiri": {
            crop: "fodder",
            investment: "₹17,000 - ₹60,000 per acre",
            profit: "₹1,20,000 per acre",
            tutorial: [
               "1.  Plow the field 2–3 times to loosen the soil and remove weeds.",
                "2.  Choose suitable high-yielding fodder varieties (e.g., CO-4 Napier, Bajra-Napier hybrid, fodder sorghum).",
                "3. Apply organic manure and recommended NPK fertilizers.",
                "4.Keep the field weed-free for the first 30 days through manual weeding or intercultivation.",
                "5.First harvest can be done 60–75 days after sowing or planting.",
                "6.Harvest at the right stage (before flowering) to ensure high nutritional value.",
            ]
        },
        "Nagarkurnool": {
            crop: "Groundnut",
            investment: "₹26,000 per acre",
            profit: "₹60000-1,30,000 per acre",
            tutorial: [
               "1. Ensure proper drainage and level the land for uniform sowing.",
                "2. Sow seeds 5–6 cm deep with 30–45 cm row spacing and 10–15 cm between seeds.",
                "3. Apply gypsum (calcium source) and basal fertilizers (NPK as required).",
                "4. Monitor for pests like leaf miner and aphids; use neem extract or recommended pesticides.",
                "5. Harvest when leaves turn yellow and pods mature (shells hard, kernels dry).",
                "6. Uproot plants, dry under sun, and separate pods for storage or sale.",
            ]
        },
        "Nalgonda": {
            crop: "Groundnut",
            investment: "₹29,000 per acre",
            profit: "₹49000-1,10,000 per acre",
            tutorial: [
               "1. Ensure proper drainage and level the land for uniform sowing.",
                "2. Sow seeds 5–6 cm deep with 30–45 cm row spacing and 10–15 cm between seeds.",
                "3. Apply gypsum (calcium source) and basal fertilizers (NPK as required).",
                "4. Monitor for pests like leaf miner and aphids; use neem extract or recommended pesticides.",
                "5. Harvest when leaves turn yellow and pods mature (shells hard, kernels dry).",
                "6. Uproot plants, dry under sun, and separate pods for storage or sale.",
            ]
        },
                "Narayanpet": {
            crop: "Groundnut",
            investment: "₹29,000 per acre",
            profit: "₹68000-1,10,000 per acre",
            tutorial: [
               "1. Ensure proper drainage and level the land for uniform sowing.",
                "2. Sow seeds 5–6 cm deep with 30–45 cm row spacing and 10–15 cm between seeds.",
                "3. Apply gypsum (calcium source) and basal fertilizers (NPK as required).",
                "4. Monitor for pests like leaf miner and aphids; use neem extract or recommended pesticides.",
                "5. Harvest when leaves turn yellow and pods mature (shells hard, kernels dry).",
                "6. Uproot plants, dry under sun, and separate pods for storage or sale.",
            ]
        },
           "Nirmal": {
            crop: "Maize",
            investment: "₹30,000-45000 per acre",
            profit: "₹50000-70000 per acre",
            tutorial: [
               "1. Plow the field 2–3 times and level it well to ensure good soil tilth.",
                "2. Choose high-yielding hybrid maize seeds suitable for your region.",
                "3. Apply fertilizers (e.g., 120:60:40 kg/ha of NPK) in 2–3 split doses.",
                "4. Weed manually or apply pre-emergent herbicide within 20 days of sowing.",
                "5. Harvest when the husks dry and kernels become hard (moisture ~20%).",
                "6. Dry the cobs in sunlight, shell the grains, and store in a cool, dry place.",
            ]
        },
        "Nizamabad": {
            crop: "Maize",
            investment: "₹30,000-45000 per acre",
            profit: "₹50000-70000 per acre",
            tutorial: [
               "1. Plow the field 2–3 times and level it well to ensure good soil tilth.",
                "2. Choose high-yielding hybrid maize seeds suitable for your region.",
                "3. Apply fertilizers (e.g., 120:60:40 kg/ha of NPK) in 2–3 split doses.",
                "4. Weed manually or apply pre-emergent herbicide within 20 days of sowing.",
                "5. Harvest when the husks dry and kernels become hard (moisture ~20%).",
                "6. Dry the cobs in sunlight, shell the grains, and store in a cool, dry place.",
            ]
        },
        "Peddapalli": {
            crop: "Cotton",
            investment: "₹52,000-92000 per acre",
            profit: "₹25000-60000 per acre",
            tutorial: [
                "1. Prepare the land by plowing and harrowing.",
                "2. Sow cotton seeds in rows with proper spacing.",
                "3. Irrigate regularly, ensuring the soil remains moist.",
                "4. Apply pesticides and fertilizers as recommended.",
                "5. Harvest the cotton once it reaches maturity.",
                "6. Dry and pack the cotton for sale."
            ]
        },
         "Rajanna Sircilla": {
            crop: "Cotton",
            investment: "₹52,000-93000 per acre",
            profit: "₹20000-60000 per acre",
            tutorial: [
                "1. Prepare the land by plowing and harrowing.",
                "2. Sow cotton seeds in rows with proper spacing.",
                "3. Irrigate regularly, ensuring the soil remains moist.",
                "4. Apply pesticides and fertilizers as recommended.",
                "5. Harvest the cotton once it reaches maturity.",
                "6. Dry and pack the cotton for sale."
            ]
        },
         "Sangareddy": {
            crop: "Pulses",
            investment: "₹48,000-100000 per acre",
            profit: "₹30000-80000 per acre",
            tutorial: [
               "1. Plow the land 2–3 times to remove weeds and break soil clumps.",
                "2. Sow seeds at proper spacing (e.g., 30–45 cm rows) at the beginning of the season.",
                "3. Keep the field weed-free for the first 30–40 days using manual weeding or intercultivation.",
                "4. Monitor for pests like pod borer and aphids; use neem-based or approved pesticides if needed.",
                "5. Harvest when leaves turn yellow and pods dry.",
                "6. Dry the harvested plants in the sun, then thresh and clean the grains for storage or sale."
            ]
        },
         "Siddipet": {
            crop: "Castor",
            investment: "₹66,000-100000 per acre",
            profit: "₹35000-80000 per acre",
            tutorial: [
               "1. Deep plow the field 2–3 times to make the soil loose and well-drained.",
                "2. Use certified seeds of improved hybrid or local varieties.",
                "3. Apply recommended fertilizers (e.g., 40:40:20 kg/ha of NPK) and 5 tons FYM per acre.",
                "4. Weed the field twice: once at 20–25 days and again at 40–45 days after sowing.",
                "5. Harvest when the capsules turn brown and start drying, but before shattering.",
                "6. Sun-dry the harvested pods, then extract and clean seeds for storage or sale."
            ]
        },
             "Surypet": {
            crop: "Pulses",
            investment: "₹66,000-100000 per acre",
            profit: "₹35000-80000 per acre",
            tutorial: [
                              "1. Plow the land 2–3 times to remove weeds and break soil clumps.",
                "2. Sow seeds at proper spacing (e.g., 30–45 cm rows) at the beginning of the season.",
                "3. Keep the field weed-free for the first 30–40 days using manual weeding or intercultivation.",
                "4. Monitor for pests like pod borer and aphids; use neem-based or approved pesticides if needed.",
                "5. Harvest when leaves turn yellow and pods dry.",
                "6. Dry the harvested plants in the sun, then thresh and clean the grains for storage or sale."
            ]
        },
         "Vikarabad": {
            crop: "Cotton",
            investment: "₹57,000-61000 per acre",
            profit: "₹80000-43000 per acre",
            tutorial: [
                "1. Prepare the land by plowing and harrowing.",
                "2. Sow cotton seeds in rows with proper spacing.",
                "3. Irrigate regularly, ensuring the soil remains moist.",
                "4. Apply pesticides and fertilizers as recommended.",
                "5. Harvest the cotton once it reaches maturity.",
                "6. Dry and pack the cotton for sale."
            ]
        },
                 "Wanaparthy": {
            crop: "Cilli",
            investment: "₹3,70,000-3,90,000 per acre",
            profit: "₹40000-60000 per acre",
            tutorial: [
                "1. Plough the field 2–3 times.",
                "2. Use certified, disease-free seeds.",
                "3. Water the field as per crop need and soil type.",
                "4. Remove weeds manually or with weedicides.",
                "5. Harvest when crop matures (check color, grain size, etc.).",
                "6. Store in clean, dry containers or bags."
            ]
        },
         "Warangal": {
            crop: "Cilli",
            investment: "₹2,90,000-3,30,000 per acre",
            profit: "₹38000 per acre",
            tutorial: [
                "1. Plough the field 2–3 times.",
                "2. Use certified, disease-free seeds.",
                "3. Water the field as per crop need and soil type.",
                "4. Remove weeds manually or with weedicides.",
                "5. Harvest when crop matures (check color, grain size, etc.).",
                "6. Store in clean, dry containers or bags."
            ]
        },
         "Jagtial": {
            crop: "Paddy",
            investment: "₹30,000 per acre",
            profit: "₹45,000 per acre",
            tutorial: [
                "1. Prepare the paddy field by leveling and puddling the soil.",
                "2. Sow the paddy seeds in flooded fields.",
                "3. Water the fields regularly, ensuring they remain flooded.",
                "4. Apply fertilizers and pesticides as needed.",
                "5. Harvest the paddy when the grains are ripe and dry."
            ]
        },
        
    };

    const cropData = cropSuggestions[district];

    if (!cropData) {
        resultDiv.innerHTML = `<p style="color: red;">No crop suggestion available for this district.</p>`;
        return;
    }

    const { crop, investment, profit, tutorial } = cropData;

    // Display the result with investment, profit, and tutorial
    resultDiv.innerHTML = `
        <div style="background: #f0fff4; border: 1px solid #38a169; padding: 1em; margin-top: 1em; border-radius: 8px;">
            <h3>🌾 Suggested Crop:</h3>
            <p><strong>District:</strong> ${district}</p>
            <p><strong>Recommended Crop:</strong> <span style="color: #2f855a;">${crop}</span></p>
            <p><strong>Estimated Investment:</strong> <span style="color: #38a169;">${investment}</span></p>
            <p><strong>Expected Profit:</strong> <span style="color: #38a169;">${profit}</span></p>
            <h4>Step-by-Step Cultivation Tutorial:</h4>
            <ul style="color: #2f855a;">
                ${tutorial.map(step => `<li>${step}</li>`).join('')}
            </ul>
        </div>
    `;
}
