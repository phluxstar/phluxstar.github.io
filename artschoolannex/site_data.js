/* =====================================================================
   site_data.js — SINGLE SOURCE OF TRUTH for the New Chapter rental site
   ---------------------------------------------------------------------
   Every page (index, compare, finder, tracker, rental_dashboard) reads
   from window.RENTAL_DATA. NOTHING is hardcoded in the pages themselves.

   This is a plain JS object literal (not fetched JSON) so it works on
   file:// locally AND on Netlify with no CORS issues.

   Data freshness: priorityProperties + listings reflect the FRESHEST
   data available — rental_tracker.json (6:10 PM check) +
   rental_dashboard.html (6pm check). Stale esperanza units (211, old 229
   price) from tracker.html have been discarded in favor of the fresh
   407 / 507 / 229 ($3,950, Oct 7) data.
   ===================================================================== */
(function () {
  var GYM_SAVE = 275;
  var BUDGET_MAX = 4300;

  // -------------------------------------------------------------------
  // META
  // -------------------------------------------------------------------
  var meta = {
    lastChecked: "June 2, 2026 · 12:20 PM PT",
    lastCheckedISO: "2026-06-02T12:20:00",
    budgetMin: 3000,
    budgetMax: 4300,
    budgetLabel: "$3,000–$4,300/mo",
    schoolName: "CS Arts",
    schoolAddress: "1401 Highland Ave, Duarte, CA 91010",
    homeAddress: "8932 Hollywood Hills Rd, Los Angeles, CA 90046",
    gymSave: GYM_SAVE,
    checkSchedule: "3× daily (8am · 1pm · 6pm PT)",
    nextCheck: "Tuesday, June 2, 2026 at 1:00 PM PT"
  };

  // -------------------------------------------------------------------
  // PRIORITY PROPERTIES (esperanza, solana, avalon) — FRESHEST data
  // -------------------------------------------------------------------
  var priorityProperties = [
    {
      id: "esperanza",
      name: "Esperanza at Duarte Station",
      short: "Esperanza",
      address: "1700 Fasana Rd, Duarte, CA 91010",
      city: "Duarte",
      phone: "(626) 361-4825",
      specials: "2 Months Free",
      topPriority: true,
      firstTracked: "May 28, 2026",
      urls: {
        website: "https://www.hollandresidential.com/ca/duarte/esperanza-at-duarte-station/floorplans",
        apartments: "https://www.apartments.com/esperanza-at-duarte-station-duarte-ca/4hjhepj/",
        zillow: "https://www.zillow.com/apartments/duarte-ca/esperanza-at-duarte-station/CkBB3B/"
      },
      tourBooked: "Tour booked — Fri Jun 5, 3:00 PM (bring photo ID)",
      // Community-level presentation data used by the index dashboard cards
      display: {
        emoji: "✨",
        bg: "linear-gradient(145deg,#0f1f3d 0%,#1a3060 100%)",
        price3: 4100,
        unitsLabel: "3BR · 1,098–1,174 sqft · units 407, 507 & 229",
        warning: null,
        amenities: { gym: true, pool: true, rooftop: true, spa: true, pets: true, cowork: true, ev: false, bark: false },
        commCS: "~3 min · 0.7 mi", commHome: "~40–50 min · 31 mi",
        commCSMin: 3, commHomeMin: 45,
        cardNotes: ["Units 407 & 507: $4,100/mo · Now (NEW)", "Unit 229: $3,950/mo · Oct 7", "Rooftop pool + private cabanas", "0.4 mi to Metro Gold Line"],
        scores: { p: 65, c: 98, h: 70, a: 95 },
        mapCS: "https://www.google.com/maps/dir/1700+Fasana+Rd,+Duarte,+CA+91010/1401+Highland+Ave,+Duarte,+CA+91010",
        mapHome: "https://www.google.com/maps/dir/8932+Hollywood+Hills+Rd,+Los+Angeles,+CA/1700+Fasana+Rd,+Duarte,+CA+91010"
      },
      units: [
        { unit: "407", plan: "Three Bedroom D1", beds: 3, baths: 3, sqft: 1174, rent: "$4,100/mo", rentNum: 4100, available: "Now", isNew: true, inBudget: true, budgetStatus: "in" },
        { unit: "507", plan: "Three Bedroom D1", beds: 3, baths: 3, sqft: 1174, rent: "$4,100/mo", rentNum: 4100, available: "Now", isNew: true, inBudget: true, budgetStatus: "in" },
        { unit: "229", plan: "Three Bedroom D2", beds: 3, baths: 2, sqft: 1098, rent: "$3,950/mo", rentNum: 3950, available: "Oct 7", isNew: false, inBudget: true, budgetStatus: "in" }
      ],
      note: "6pm check 2026-06-01: D1 plan now has TWO available units 407 & 507 at $4,100/mo, available Now, both in budget. Unit 229 dropped to $3,950, now Oct 7. Previously-tracked Unit 211 is gone."
    },
    {
      id: "solana",
      name: "Solana at Duarte Station",
      short: "Solana",
      address: "1750 Fasana Rd, Duarte, CA 91010",
      city: "Duarte",
      phone: "(949) 490-6590",
      email: "SolanaLiving@Greystar.com",
      specials: "8 Weeks Free on Base Rent",
      topPriority: false,
      urls: {
        website: "https://solanaduarte.securecafe.com/onlineleasing/solana-at-duarte-station/availableunits.aspx?myOlePropertyId=1861747",
        apartments: "https://www.apartments.com/solana-at-duarte-station-duarte-ca/75x9h5w/",
        zillow: "https://www.zillow.com/apartments/duarte-ca/solana-at-duarte-station/Cj7wyT/"
      },
      tourBooked: null,
      display: {
        emoji: "☀️",
        bg: "linear-gradient(145deg,#7a4a00 0%,#c07d35 100%)",
        price3: null,
        unitsLabel: "No 3BR available — monitoring",
        warning: "No 3BR currently available",
        amenities: { gym: true, pool: true, rooftop: false, spa: false, pets: true, cowork: false, ev: false, bark: true },
        commCS: "~3 min · 0.7 mi", commHome: "~40–50 min · 31 mi",
        commCSMin: 3, commHomeMin: 45,
        cardNotes: ["No 3BR units available right now", 'Plans C1 (1,899 sf) & C1-M (2,237 sf) — "Available Soon"', "Bark Park + Wags Lounge", "0.4 mi to Metro Gold Line"],
        scores: { p: 50, c: 98, h: 70, a: 80 },
        mapCS: "https://www.google.com/maps/dir/1750+Fasana+Rd,+Duarte,+CA+91010/1401+Highland+Ave,+Duarte,+CA+91010",
        mapHome: "https://www.google.com/maps/dir/8932+Hollywood+Hills+Rd,+Los+Angeles,+CA/1750+Fasana+Rd,+Duarte,+CA+91010"
      },
      // No 3BR available — these are floor plans only (Available Soon / Call for Rent)
      units: [],
      plans: [
        { plan: "C1", beds: 3, baths: 3, sqft: 1899, rent: "Call for Rent", rentNum: null, available: "Available Soon", budgetStatus: "call" },
        { plan: "C1-M", beds: 3, baths: 3, sqft: 2237, rent: "Call for Rent", rentNum: null, available: "Available Soon", budgetStatus: "call" }
      ],
      note: "No 3BR currently bookable — plans C1 (1,899 sqft) and C1-M (2,237 sqft) show 'Available Soon / Call for Rent.' Monitoring daily. Price range $2,296–$4,179."
    },
    {
      id: "avalon",
      name: "Avalon Monrovia",
      short: "Avalon",
      address: "825 S Myrtle Ave, Monrovia, CA 91016",
      city: "Monrovia",
      phone: "(855) 572-9173",
      specials: null,
      topPriority: false,
      firstTracked: "May 28, 2026",
      locationNote: "In Old Town Monrovia",
      urls: {
        website: "https://www.avaloncommunities.com/california/monrovia-apartments/avalon-monrovia/",
        apartments: "https://www.apartments.com/avalon-monrovia-monrovia-ca/y1zwvrv/",
        zillow: "https://www.zillow.com/apartments/monrovia-ca/avalon-monrovia/9V4Lzh/"
      },
      tourBooked: null,
      display: {
        emoji: "🏙️",
        bg: "linear-gradient(145deg,#1a3a5c 0%,#2c5f8a 100%)",
        price3: 5200,
        unitsLabel: "3BR Signature — well over budget",
        warning: "3BR units $5,200–$5,910 — over budget",
        amenities: { gym: true, pool: true, rooftop: true, spa: true, pets: true, cowork: false, ev: false, bark: false },
        commCS: "~9 min · 2.7 mi", commHome: "~40–45 min · 30 mi",
        commCSMin: 9, commHomeMin: 42,
        cardNotes: ["Unit SI-FL4: $5,200/mo · Now", "Unit SI-FL1: $5,910/mo · Now", "Old Town walkability + dining", "Rooftop deck, pool + spa"],
        scores: { p: 22, c: 65, h: 73, a: 90 },
        mapCS: "https://www.google.com/maps/dir/825+S+Myrtle+Ave,+Monrovia,+CA+91016/1401+Highland+Ave,+Duarte,+CA+91010",
        mapHome: "https://www.google.com/maps/dir/8932+Hollywood+Hills+Rd,+Los+Angeles,+CA/825+S+Myrtle+Ave,+Monrovia,+CA+91016"
      },
      units: [
        { unit: "SI-FL4", plan: "3BR Signature / Fl 4", beds: 3, baths: null, sqft: null, rent: "$5,200/mo", rentNum: 5200, available: "Now", isNew: false, inBudget: false, budgetStatus: "well-over", phone: "(626) 415-0730", url: "https://www.apartments.com/825-s-myrtle-ave-monrovia-ca-unit-si-fl4-id11896a/hj58v42/" },
        { unit: "SI-FL1", plan: "3BR Signature / Fl 1", beds: 3, baths: null, sqft: null, rent: "$5,910/mo", rentNum: 5910, available: "Now", isNew: false, inBudget: false, budgetStatus: "well-over", phone: "(626) 415-0547", url: "https://www.apartments.com/825-s-myrtle-ave-monrovia-ca-unit-si-fl1-id11906a/zvb5fdw/" }
      ],
      note: "Both individual 3BR Signature listings still active — likely premium/furnished, both well over the $4,300 budget."
    }
  ];

  // -------------------------------------------------------------------
  // TOURS — booked for Friday, June 5, 2026 (time order)
  // -------------------------------------------------------------------
  var tours = [
    {
      time: "10:00 AM",
      address: "361 Norumbega Dr, Monrovia",
      type: "House", beds: "3BR 2BA", sqft: 1350,
      rent: "~$4,100/mo", rentNum: 4100, inBudget: true,
      agent: "Apple Zhou", agentPhone: "(626) 400-8880",
      listingId: "norumbega-361",
      note: "price varies by source, confirm at tour"
    },
    {
      time: "11:00 AM",
      address: "1032 Royal Oaks Dr #C, Duarte",
      type: null, beds: null, sqft: null,
      rent: null, rentNum: null, inBudget: null,
      agent: "Margarit Torgomyan", agentPhone: "(626) 808-8055",
      listingId: "royaloaks-1032",
      note: "verify details at tour"
    },
    {
      time: "12:00 PM",
      address: "417 E. Walnut Ave #A, Monrovia",
      type: "Apt", beds: "2BR 1BA", sqft: 900,
      rent: "$2,995/mo", rentNum: 2995, inBudget: true,
      agent: "Sonia Lang", agentPhone: null,
      listingId: "walnut-417",
      note: "2BR (under $3K)"
    },
    {
      time: "1:00 PM",
      address: "716 Gladys Ave, Monrovia",
      type: "House", beds: null, sqft: null,
      rent: null, rentNum: null, inBudget: null,
      agent: null, agentPhone: null,
      listingId: "gladys-716",
      isNew: true,
      note: "Added to Family calendar — verify details at tour"
    },
    {
      time: "2:00 PM",
      address: "Solana at Duarte Station — 1750 Fasana Rd, Duarte",
      type: null, beds: "3BR", sqft: null,
      rent: null, rentNum: null, inBudget: null,
      agent: null, agentPhone: "(949) 490-6590",
      listingId: "solana",
      isNew: true, isPriority: true,
      note: "Priority property — bring photo ID"
    },
    {
      time: "3:00–4:00 PM",
      address: "Esperanza at Duarte Station — 1700 Fasana Rd, Duarte",
      type: null, beds: null, sqft: null,
      rent: null, rentNum: null, inBudget: null,
      agent: null, agentPhone: null,
      listingId: "esperanza",
      isPriority: true,
      note: "Bring photo ID"
    },
    {
      time: "4:00–5:00 PM",
      address: "1676 3rd St, Duarte",
      type: "House", beds: "3BR", sqft: null,
      rent: "$3,950/mo", rentNum: 3950, inBudget: true,
      agent: null, agentPhone: "(626) 606-2146",
      listingId: "duarte-1676",
      note: null
    },
    {
      time: "5:30 PM",
      address: "304 W Lime Ave, Monrovia",
      type: null, beds: null, sqft: null,
      rent: null, rentNum: null, inBudget: null,
      agent: "Jay Hu", agentPhone: null,
      listingId: null,
      note: "verify details at tour"
    }
  ];

  // -------------------------------------------------------------------
  // Helper: classify a numeric rent against the budget
  // -------------------------------------------------------------------
  function classify(rentNum) {
    if (rentNum == null) return "call";
    if (rentNum < meta.budgetMin) return "under";
    if (rentNum <= BUDGET_MAX) return "in";
    if (rentNum <= 5000) return "slightly-over";
    return "well-over";
  }

  // -------------------------------------------------------------------
  // LISTINGS — every individual rental + nearby find + zillow save,
  // merged & de-duplicated by address. Superset of all fields used by
  // index / compare / finder / tracker / dashboard.
  //
  // Field reference:
  //   id, name, address, city, type (display Type), beds (numeric),
  //   baths (numeric|null), bedsLabel (e.g. "3BR 2BA"), bedsBath
  //   (e.g. "3BD/2BA" finder style), sqft (numeric|null), rent (string),
  //   rentNum (number|null), inBudget (bool), budgetStatus, distance
  //   (string to CS Arts), distLabel (dashboard ~Dist), phone, url,
  //   special, freeMonths, tag (priority|zillow|nearby), tourTime,
  //   tourDate (badge text), notes, img, hasGym, availText, availType,
  //   amenities (finder score 0-100), cs_min, cs_mi, hh_min, plan
  // -------------------------------------------------------------------
  var listings = [
    // ===== ESPERANZA per-unit (current, fresh) =====
    {
      id: "esperanza-407", esperanzaUnit: "407", name: "Esperanza — Unit 407", short: "Esperanza 407",
      address: "1700 Fasana Rd, Duarte, CA 91010", city: "Duarte", type: "Apartment",
      beds: 3, baths: 3, bedsLabel: "3BR 3BA", bedsBath: "3BD/3BA", sqft: 1174,
      rent: "$4,100/mo", rentNum: 4100, inBudget: true, budgetStatus: "in",
      distance: "~0.7 mi", distLabel: "0.7 mi", phone: "(626) 361-4825",
      url: "https://www.apartments.com/esperanza-at-duarte-station-duarte-ca/4hjhepj/",
      special: "2 Months Free", freeMonths: 2, tag: "priority",
      tourTime: "3:00–4:00 PM", tourDate: "Tour Fri 6/5 · 3 PM (photo ID)",
      notes: "3BR D1 floor plan · Available Now · NEW · in budget · Tour booked Fri 6/5 3PM",
      img: "https://images1.apartments.com/i2/QpYE8_WDPqlhQLAP7hQF5E07_vqZv9oxQGcetqn7qE0/116/esperanza-at-duarte-station-duarte-ca-building-photo.jpg",
      hasGym: true, availText: "Now", availType: "now", amenities: 85,
      cs_min: 5, cs_mi: "0.7 mi", hh_min: 95, plan: "Three Bed D1", isNew: true
    },
    {
      id: "esperanza-507", esperanzaUnit: "507", name: "Esperanza — Unit 507", short: "Esperanza 507",
      address: "1700 Fasana Rd, Duarte, CA 91010", city: "Duarte", type: "Apartment",
      beds: 3, baths: 3, bedsLabel: "3BR 3BA", bedsBath: "3BD/3BA", sqft: 1174,
      rent: "$4,100/mo", rentNum: 4100, inBudget: true, budgetStatus: "in",
      distance: "~0.7 mi", distLabel: "0.7 mi", phone: "(626) 361-4825",
      url: "https://www.apartments.com/esperanza-at-duarte-station-duarte-ca/4hjhepj/",
      special: "2 Months Free", freeMonths: 2, tag: "priority",
      tourTime: "3:00–4:00 PM", tourDate: "Tour Fri 6/5 · 3 PM (photo ID)",
      notes: "3BR D1 floor plan · Available Now · NEW · in budget",
      img: "https://images1.apartments.com/i2/QpYE8_WDPqlhQLAP7hQF5E07_vqZv9oxQGcetqn7qE0/116/esperanza-at-duarte-station-duarte-ca-building-photo.jpg",
      hasGym: true, availText: "Now", availType: "now", amenities: 85,
      cs_min: 5, cs_mi: "0.7 mi", hh_min: 95, plan: "Three Bed D1", isNew: true
    },
    {
      id: "esperanza-229", esperanzaUnit: "229", name: "Esperanza — Unit 229", short: "Esperanza 229",
      address: "1700 Fasana Rd, Duarte, CA 91010", city: "Duarte", type: "Apartment",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 1098,
      rent: "$3,950/mo", rentNum: 3950, inBudget: true, budgetStatus: "in",
      distance: "~0.7 mi", distLabel: "0.7 mi", phone: "(626) 361-4825",
      url: "https://www.apartments.com/esperanza-at-duarte-station-duarte-ca/4hjhepj/",
      special: "2 Months Free", freeMonths: 2, tag: "priority",
      tourTime: null, tourDate: null,
      notes: "3BR D2 floor plan · Available Oct 7 · in budget (price dropped from $4,183)",
      img: "https://images1.apartments.com/i2/QpYE8_WDPqlhQLAP7hQF5E07_vqZv9oxQGcetqn7qE0/116/esperanza-at-duarte-station-duarte-ca-building-photo.jpg",
      hasGym: true, availText: "Oct 7", availType: "soon", amenities: 85,
      cs_min: 5, cs_mi: "0.7 mi", hh_min: 95, plan: "Three Bed D2", isNew: false
    },
    // ===== SOLANA (no 3BR available) =====
    {
      id: "solana", name: "Solana at Duarte Station", short: "Solana",
      address: "1750 Fasana Rd, Duarte, CA 91010", city: "Duarte", type: "Apartment",
      beds: 3, baths: null, bedsLabel: "3BR", bedsBath: "3BD", sqft: null,
      rent: null, rentNum: null, inBudget: false, budgetStatus: "call",
      distance: "~0.7 mi", distLabel: "0.7 mi", phone: "(949) 490-6590",
      url: "https://www.apartments.com/solana-at-duarte-station-duarte-ca/75x9h5w/",
      special: "8 Weeks Free on Base Rent", freeMonths: 2, tag: "priority",
      tourTime: "2:00 PM", tourDate: "Tour Fri 6/5 · 2 PM (photo ID)",
      notes: "Tour booked Fri 6/5 2PM. Plans C1/C1-M show 'Available Soon.' Monitoring daily.",
      img: "https://images1.apartments.com/i2/d-AWQMJo80zNTDOLIMTSB2lEFO9hxkHZQn0iy5QtnYI/116/solana-at-duarte-station-duarte-ca-building-photo.jpg",
      hasGym: true, availText: "No 3BR — Monitoring", availType: "watch", amenities: 80,
      cs_min: 4, cs_mi: "0.7 mi", hh_min: 95, plan: 'Plans C1/C1-M — "Available Soon"', isNew: false
    },
    // ===== AVALON per-unit (over budget) =====
    {
      id: "avalon-fl4", avalonUnit: "SI-FL4", name: "Avalon Monrovia — Unit SI-FL4", short: "Avalon SI-FL4",
      address: "825 S Myrtle Ave, Monrovia, CA 91016", city: "Monrovia", type: "Apartment",
      beds: 3, baths: null, bedsLabel: "3BR", bedsBath: "3BD", sqft: null,
      rent: "$5,200/mo", rentNum: 5200, inBudget: false, budgetStatus: "well-over",
      distance: "~2.7 mi", distLabel: "2.7 mi", phone: "(626) 415-0730",
      url: "https://www.avaloncommunities.com/california/monrovia-apartments/avalon-monrovia/",
      special: null, freeMonths: 0, tag: "priority",
      tourTime: null, tourDate: null,
      notes: "Above budget — Old Town Monrovia location is ideal. Likely premium/furnished Signature unit.",
      img: "https://images1.apartments.com/i2/-qmPg6QCj97GtkoAlDAP5n5cyNFdCUy25gJS5twFQyI/116/avalon-monrovia-monrovia-ca-avalon-monrovia-pool-and-sundeck.jpg",
      hasGym: true, availText: "Over budget", availType: "now", amenities: 90,
      cs_min: 9, cs_mi: "2.7 mi", hh_min: 85, plan: "SI-FL4 · also SI-FL1 $5,910", isNew: false
    },
    {
      id: "avalon-fl1", avalonUnit: "SI-FL1", name: "Avalon Monrovia — Unit SI-FL1", short: "Avalon SI-FL1",
      address: "825 S Myrtle Ave, Monrovia, CA 91016", city: "Monrovia", type: "Apartment",
      beds: 3, baths: null, bedsLabel: "3BR", bedsBath: "3BD", sqft: null,
      rent: "$5,910/mo", rentNum: 5910, inBudget: false, budgetStatus: "well-over",
      distance: "~2.7 mi", distLabel: "2.7 mi", phone: "(626) 415-0547",
      url: "https://www.avaloncommunities.com/california/monrovia-apartments/avalon-monrovia/",
      special: null, freeMonths: 0, tag: "priority",
      tourTime: null, tourDate: null,
      notes: "Above budget. Likely premium/furnished Signature unit.",
      img: "https://images1.apartments.com/i2/-qmPg6QCj97GtkoAlDAP5n5cyNFdCUy25gJS5twFQyI/116/avalon-monrovia-monrovia-ca-avalon-monrovia-pool-and-sundeck.jpg",
      hasGym: true, availText: "Over budget", availType: "now", amenities: 90,
      cs_min: 9, cs_mi: "2.7 mi", hh_min: 85, plan: "SI-FL1 Signature", isNew: false
    },
    // ===== ZILLOW SAVES =====
    {
      id: "zillow-ivy", name: "149 N Ivy Ave", short: "149 N Ivy Ave",
      address: "149 N Ivy Ave, Monrovia, CA 91016", city: "Monrovia", type: "House",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 1300,
      rent: "$4,300/mo", rentNum: 4300, inBudget: true, budgetStatus: "in",
      distance: "~2.6 mi", distLabel: "~2.6 mi", phone: "Zillow",
      url: "https://www.zillow.com/homedetails/149-N-Ivy-Ave-Monrovia-CA-91016/21584700_zpid/",
      special: null, freeMonths: 0, tag: "zillow",
      tourTime: null, tourDate: null, notes: "",
      img: "https://photos.zillowstatic.com/fp/51ae83d54e6dbcd8c0a2bd7ae0a1bace-p_f.jpg",
      hasGym: false, availText: "Available", availType: "now", amenities: 30,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "House for rent", isNew: false
    },
    {
      id: "zillow-alta-vista-303", name: "303 S Alta Vista Ave", short: "303 S Alta Vista Ave",
      address: "303 S Alta Vista Ave, Monrovia, CA 91016", city: "Monrovia", type: "Apartment",
      beds: 3, baths: 2.5, bedsLabel: "3BR 2.5BA", bedsBath: "3BD/2.5BA", sqft: 1475,
      rent: "$3,350/mo", rentNum: 3350, inBudget: true, budgetStatus: "in",
      distance: "~2.6 mi", distLabel: "~2.6 mi", phone: "Zillow",
      url: "https://www.zillow.com/homedetails/303-S-Alta-Vista-Ave-Monrovia-CA-91016/446762845_zpid/",
      special: null, freeMonths: 0, tag: "zillow",
      tourTime: null, tourDate: null, notes: "",
      img: "https://photos.zillowstatic.com/fp/8370dd1134ddab9e04f30b021d643d22-p_f.jpg",
      hasGym: false, availText: "Available", availType: "now", amenities: 40,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "Apartment for rent", isNew: false
    },
    {
      id: "zillow-peppertree", name: "134 Peppertree Ln", short: "134 Peppertree Ln",
      address: "134 Peppertree Ln, Monrovia, CA 91016", city: "Monrovia", type: "Townhouse",
      beds: 3, baths: 3, bedsLabel: "3BR 3BA", bedsBath: "3BD/3BA", sqft: 1440,
      rent: "$3,485/mo", rentNum: 3485, inBudget: true, budgetStatus: "in",
      distance: "~2.6 mi", distLabel: "~2.6 mi", phone: "Zillow",
      url: "https://www.zillow.com/homedetails/134-Peppertree-Ln-Monrovia-CA-91016/54669236_zpid/",
      special: null, freeMonths: 0, tag: "zillow",
      tourTime: null, tourDate: null, notes: "",
      img: "https://photos.zillowstatic.com/fp/90b504d1df3697860611d2b89022ddfb-p_f.jpg",
      hasGym: false, availText: "Available", availType: "now", amenities: 50,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "Townhouse for rent", isNew: false
    },
    {
      id: "zillow-alta-vista-301", name: "303-1 S Alta Vista Ave", short: "303-1 S Alta Vista Ave",
      address: "303-1 S Alta Vista Ave, Monrovia, CA 91016", city: "Monrovia", type: "Apartment",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 1235,
      rent: "$2,950/mo", rentNum: 2950, inBudget: true, budgetStatus: "under",
      distance: "~2.6 mi", distLabel: "~2.6 mi", phone: "Zillow",
      url: "https://www.zillow.com/myzillow/favorites",
      special: null, freeMonths: 0, tag: "zillow",
      tourTime: null, tourDate: null, notes: "Slightly under $3K budget min",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 35,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "Apartment for rent", isNew: false
    },
    // ===== NEARBY FINDS — Apartment complexes =====
    {
      id: "monroe", name: "The Monroe", short: "The Monroe",
      address: "127 W Pomona St, Monrovia, CA 91016", city: "Monrovia", type: "Apartment",
      beds: 3, baths: null, bedsLabel: "3BR", bedsBath: "3BD", sqft: null,
      rent: null, rentNum: null, inBudget: false, budgetStatus: "call",
      distance: "~0.3 mi", distLabel: "0.3 mi", phone: "(626) 415-3989",
      url: "https://www.apartments.com/the-monroe-monrovia-ca/ngbxn5m/",
      special: "2 Months Free", freeMonths: 2, tag: "nearby", complex: true,
      tourTime: null, tourDate: null, notes: "~0.3 mi from CS Arts · Call for 3BR price · Old Town",
      img: "https://images1.apartments.com/i2/0J78PTujL4IdwjqqGcZMeEfZ0gcXCMqtSOJTGN8-ubw/102/the-monroe-monrovia-ca-building-photo.jpg",
      hasGym: true, availText: "Call for Price", availType: "watch", amenities: 85,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "Call for pricing", statusLabel: "Old Town", isNew: false
    },
    {
      id: "alexan", name: "Alexan Marmont", short: "Alexan Marmont",
      address: "1625 S Magnolia Ave, Monrovia, CA 91016", city: "Monrovia", type: "Apartment",
      beds: 3, baths: null, bedsLabel: "3BR", bedsBath: "3BD", sqft: null,
      rent: null, rentNum: null, inBudget: false, budgetStatus: "call",
      distance: "~0.5 mi", distLabel: "0.5 mi", phone: "(626) 415-0624",
      url: "https://www.apartments.com/alexan-marmont-monrovia-ca/35espcg/",
      special: "2 Months Free", freeMonths: 2, tag: "nearby", complex: true,
      tourTime: null, tourDate: null, notes: "~0.5 mi from CS Arts · Call for 3BR price · Luxury",
      img: "https://images1.apartments.com/i2/SJ7ywG0tvJrFalCCy65QpS5QUItFCrxIV0gnLonABHc/102/alexan-marmont-monrovia-ca-building-photo.jpg",
      hasGym: true, availText: "Call for Price", availType: "watch", amenities: 85,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "Call for pricing", statusLabel: "Luxury", isNew: false
    },
    // ===== NEARBY FINDS — Individual rentals (in budget) =====
    {
      id: "hillcrest", name: "727 W Hillcrest Blvd", short: "727 W Hillcrest Blvd",
      address: "727 W Hillcrest Blvd, Monrovia, CA 91016", city: "Monrovia", type: "House",
      beds: 3, baths: null, bedsLabel: "3BR", bedsBath: "3BD", sqft: null,
      rent: "$3,018/mo", rentNum: 3018, inBudget: true, budgetStatus: "in",
      distance: "~1 mi", distLabel: "~1 mi", phone: "(805) 946-2450",
      url: "https://www.apartments.com/727-w-hillcrest-blvd-monrovia-ca/w5gedel/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "",
      img: "https://images1.apartments.com/i2/CQeUe4fOKDnJ_lwOXFutFIUAm9yojNZpSj7av6yyISw/117/727-w-hillcrest-blvd-monrovia-ca-building-photo.jpg",
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "House for rent", isNew: false
    },
    {
      id: "myrtle-2423", name: "2423 S Myrtle Ave", short: "2423 S Myrtle Ave",
      address: "2423 S Myrtle Ave, Monrovia, CA 91016", city: "Monrovia", type: "Apartment",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 1200,
      rent: "$3,280/mo", rentNum: 3280, inBudget: true, budgetStatus: "in",
      distance: "~1 mi", distLabel: "~1 mi", phone: "(626) 392-6811",
      url: "https://www.apartments.com/2423-s-myrtle-ave-monrovia-ca/jfsc556/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "Same street as CS Arts!",
      img: "https://images1.apartments.com/i2/yCNJKVXAZqISaoMyXPmG-EXnNgsGXO0WWZ6fEKVlXR4/117/2423-s-myrtle-ave-monrovia-ca-building-photo.jpg",
      hasGym: false, availText: "Available", availType: "now", amenities: 35,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "Apartment for rent", isNew: false
    },
    {
      id: "camino-601", name: "601 Camino Grove Ave", short: "601 Camino Grove Ave",
      address: "601 Camino Grove Ave, Arcadia, CA 91006", city: "Arcadia", type: "Apartment",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 1496,
      rent: "$3,295/mo", rentNum: 3295, inBudget: true, budgetStatus: "in",
      distance: "~2 mi", distLabel: "~2 mi", phone: "(888) 746-6468",
      url: "https://www.apartments.com/601-camino-grove-ave-arcadia-ca/z5vrjfz/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 30,
      cs_min: 8, cs_mi: "~2 mi", hh_min: 80, plan: "Apartment for rent", isNew: false
    },
    {
      id: "second-605", name: "605 S 2nd Ave Unit A", short: "605 S 2nd Ave Unit A",
      address: "605 S 2nd Ave Unit A, Arcadia, CA 91006", city: "Arcadia", type: "Apartment",
      beds: 3, baths: 2.5, bedsLabel: "3BR 2.5BA", bedsBath: "3BD/2.5BA", sqft: 1400,
      rent: "$3,200/mo", rentNum: 3200, inBudget: true, budgetStatus: "in",
      distance: "~2 mi", distLabel: "~2 mi", phone: "—",
      url: "https://www.apartments.com/605-s-2nd-ave-arcadia-ca-unit-a/xcyx4hp/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 30,
      cs_min: 8, cs_mi: "~2 mi", hh_min: 80, plan: "Apartment for rent", isNew: false
    },
    {
      id: "duarte-708", name: "708 W Duarte Rd", short: "708 W Duarte Rd",
      address: "708 W Duarte Rd, Monrovia, CA 91016", city: "Monrovia", type: "House",
      beds: 3, baths: 3, bedsLabel: "3BR 3BA", bedsBath: "3BD/3BA", sqft: 1720,
      rent: "$3,395/mo", rentNum: 3395, inBudget: true, budgetStatus: "in",
      distance: "~1 mi", distLabel: "~1 mi", phone: "(626) 281-9338",
      url: "https://www.apartments.com/708-w-duarte-rd-monrovia-ca/k82c1n8/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "Spacious 1,720 sqft",
      img: "https://images1.apartments.com/i2/dL9TuiX728c24rQT0mmYGe-GF92iBaaH-LksieMB34k/117/708-w-duarte-rd-monrovia-ca-building-photo.jpg",
      hasGym: false, availText: "Available", availType: "now", amenities: 30,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "House for rent", isNew: false
    },
    {
      id: "santaanita-909", name: "909 N Santa Anita Ave Unit Main", short: "909 N Santa Anita Ave",
      address: "909 N Santa Anita Ave Unit Main, Arcadia, CA 91006", city: "Arcadia", type: "Apartment",
      beds: 3, baths: 1, bedsLabel: "3BR 1BA", bedsBath: "3BD/1BA", sqft: 1021,
      rent: "$3,400/mo", rentNum: 3400, inBudget: true, budgetStatus: "in",
      distance: "~2.5 mi", distLabel: "~2.5 mi", phone: "(626) 684-4155",
      url: "https://www.apartments.com/909-n-santa-anita-ave-arcadia-ca-unit-main/7p8d27y/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "12-month lease",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 9, cs_mi: "~2.5 mi", hh_min: 80, plan: "Apartment · 12-mo lease", isNew: false
    },
    {
      id: "foothill-908", name: "908 W Foothill Blvd Unit C", short: "908 W Foothill Blvd Unit C",
      address: "908 W Foothill Blvd Unit C, Monrovia, CA 91016", city: "Monrovia", type: "Apartment",
      beds: 3, baths: 2.5, bedsLabel: "3BR 2.5BA", bedsBath: "3BD/2.5BA", sqft: 1268,
      rent: "$3,500/mo", rentNum: 3500, inBudget: true, budgetStatus: "in",
      distance: "~1 mi", distLabel: "~1 mi", phone: "—",
      url: "https://www.apartments.com/908-w-foothill-blvd-monrovia-ca-unit-c/rhvl550/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "12-month lease · Also in Zillow saves",
      img: "https://images1.apartments.com/i2/eH20HncP1vm9u-ohy8H-Sl5Q1-YxRT2wEMcVmfLOitM/117/908-w-foothill-blvd-unit-c-monrovia-ca-building-photo.jpg",
      hasGym: false, availText: "Available", availType: "now", amenities: 35,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "Apartment · 12-mo lease", isNew: false
    },
    {
      id: "california-402", name: "402 California St Unit B", short: "402 California St Unit B",
      address: "402 California St Unit B, Arcadia, CA 91006", city: "Arcadia", type: "Condo",
      beds: 3, baths: 3, bedsLabel: "3BR 3BA", bedsBath: "3BD/3BA", sqft: 1390,
      rent: "$3,595/mo", rentNum: 3595, inBudget: true, budgetStatus: "in",
      distance: "~2 mi", distLabel: "~2 mi", phone: "(626) 693-3657",
      url: "https://www.apartments.com/402-california-st-arcadia-ca-unit-b/bpxzp88/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "3-story condo · hardwood floors · 2-car garage · fireplace · Available Now · No pets",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 30,
      cs_min: 8, cs_mi: "~2 mi", hh_min: 80, plan: "Condo · hardwood · 2-car garage", isNew: false
    },
    {
      id: "encino-1516", name: "1516 Encino Ave", short: "1516 Encino Ave",
      address: "1516 Encino Ave, Monrovia, CA 91016", city: "Monrovia", type: "House",
      beds: 3, baths: 2.5, bedsLabel: "3BR 2.5BA", bedsBath: "3BD/2.5BA", sqft: 1662,
      rent: "$3,775/mo", rentNum: 3775, inBudget: true, budgetStatus: "in",
      distance: "~1.5 mi", distLabel: "~1.5 mi", phone: "(858) 864-8118",
      url: "https://www.apartments.com/1516-encino-ave-monrovia-ca/2fn6x69/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "",
      img: "https://images1.apartments.com/si2/9EPtjjfbjVg48oc_TL58mMDPaY-Ph6HujW-fFDvTq90TxJVu9BPEQjRU1CT9W4lx/117/image.jpg",
      hasGym: false, availText: "Available", availType: "now", amenities: 30,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "House for rent", isNew: false
    },
    {
      id: "may-232", name: "232 May Ave", short: "232 May Ave",
      address: "232 May Ave, Monrovia, CA 91016", city: "Monrovia", type: "Apartment",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 1484,
      rent: "$3,800/mo", rentNum: 3800, inBudget: true, budgetStatus: "in",
      distance: "~1.5 mi", distLabel: "~1.5 mi", phone: "(626) 234-9369",
      url: "https://www.apartments.com/232-may-ave-monrovia-ca/k2sk34b/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "",
      img: "https://images1.apartments.com/i2/KuFTUtLE5XSUIdSOS4uNcBrjc7O6TxXU0Cs5yfrCkA8/117/232-may-ave-monrovia-ca-building-photo.jpg",
      hasGym: false, availText: "Available", availType: "now", amenities: 35,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "Apartment for rent", isNew: false
    },
    {
      id: "duarte-1676", name: "1676 3rd St", short: "1676 3rd St",
      address: "1676 3rd St, Duarte, CA 91010", city: "Duarte", type: "House",
      beds: 3, baths: null, bedsLabel: "3BR", bedsBath: "3BD", sqft: null,
      rent: "$3,950/mo", rentNum: 3950, inBudget: true, budgetStatus: "in",
      distance: "near Esperanza", distLabel: "near Esperanza", phone: "(626) 606-2146",
      url: "https://www.apartments.com/unit-duarte-ca/zn6krdx/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: "4:00–5:00 PM", tourDate: "Tour Fri 6/5 · 4 PM",
      notes: "Near Esperanza & Solana · Tour booked Fri 6/5 4PM",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 8, cs_mi: "1.2 mi", hh_min: 95, plan: "House for rent", isNew: false
    },
    {
      id: "tenth-2558", name: "2558 S 10th Ave", short: "2558 S 10th Ave",
      address: "2558 S 10th Ave, Arcadia, CA 91006", city: "Arcadia", type: "House",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 1200,
      rent: "$4,000/mo", rentNum: 4000, inBudget: true, budgetStatus: "in",
      distance: "~2 mi", distLabel: "~2 mi", phone: "(714) 336-9906",
      url: "https://www.apartments.com/2558-s-10th-ave-arcadia-ca/f33l00t/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 8, cs_mi: "~2 mi", hh_min: 80, plan: "House for rent", isNew: false
    },
    {
      id: "graydon-1907", name: "1907 Graydon Ave", short: "1907 Graydon Ave",
      address: "1907 Graydon Ave, Monrovia, CA 91016", city: "Monrovia", type: "House",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 1235,
      rent: "$4,200/mo", rentNum: 4200, inBudget: true, budgetStatus: "in",
      distance: "~1.5 mi", distLabel: "~1.5 mi", phone: "(626) 394-6696",
      url: "https://www.apartments.com/1907-graydon-ave-monrovia-ca/z13zs6w/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "",
      img: "https://images1.apartments.com/i2/T2sUnqkKcT_Hc7TyNLUfdfS0m9StcqZkGij82b83tEU/117/1907-graydon-ave-monrovia-ca-building-photo.jpg",
      hasGym: false, availText: "Available", availType: "now", amenities: 30,
      cs_min: 11, cs_mi: "2.6 mi", hh_min: 85, plan: "House for rent", isNew: false
    },
    {
      id: "second-2018", name: "2018 S 2nd Ave", short: "2018 S 2nd Ave",
      address: "2018 S 2nd Ave, Arcadia, CA 91006", city: "Arcadia", type: "House",
      beds: 3, baths: 2, bedsLabel: "3BR", bedsBath: "3BD", sqft: 1700,
      rent: "$4,200/mo", rentNum: 4200, inBudget: true, budgetStatus: "in",
      distance: "~2 mi", distLabel: "~2 mi", phone: "(626) 709-2525",
      url: "https://www.apartments.com/2018-s-2nd-ave-arcadia-ca/vf5eyhg/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "Also appears at /0g3h503/ (3BR/2BA/1,700 sqft, 12-mo lease) — possible dup",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 8, cs_mi: "~2 mi", hh_min: 80, plan: "House for rent", isNew: false
    },
    {
      id: "elcapitan-2319", name: "2319 El Capitan Ave", short: "2319 El Capitan Ave",
      address: "2319 El Capitan Ave, Arcadia, CA 91006", city: "Arcadia", type: "House",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 1881,
      rent: "$4,300/mo", rentNum: 4300, inBudget: true, budgetStatus: "in",
      distance: "~2 mi", distLabel: "~2 mi", phone: "(949) 872-7700",
      url: "https://www.apartments.com/2319-el-capitan-ave-arcadia-ca/mpmyfck/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "At budget ceiling of $4,300/mo",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 8, cs_mi: "~2 mi", hh_min: 80, plan: "House · at budget ceiling", statusLabel: "At ceiling", isNew: false
    },
    // ===== BOOKED-TOUR LISTINGS (new) =====
    {
      id: "norumbega-361", name: "361 Norumbega Dr", short: "361 Norumbega Dr",
      address: "361 Norumbega Dr, Monrovia, CA 91016", city: "Monrovia", type: "House",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 1350,
      rent: "~$4,100/mo", rentNum: 4100, inBudget: true, budgetStatus: "in",
      distance: "~2.6 mi", distLabel: "~2.6 mi", phone: "(626) 400-8880",
      url: "https://www.apartments.com/361-norumbega-dr-monrovia-ca/srdgeg5/",
      special: null, freeMonths: 0, tag: "priority",
      tourTime: "10:00 AM", tourDate: "Tour Fri 6/5 · 10 AM",
      agent: "Apple Zhou", agentPhone: "(626) 400-8880",
      notes: "Agent: Apple Zhou · price varies by source ($3.5K–$6K) — confirm at tour",
      img: null,
      hasGym: false, availText: "Tour booked", availType: "now", amenities: 30,
      cs_min: 9, cs_mi: "2.6 mi", hh_min: 85, plan: "House · price varies — confirm at tour", isNew: false
    },
    {
      id: "royaloaks-1032", name: "1032 Royal Oaks Dr #C", short: "1032 Royal Oaks Dr #C",
      address: "1032 Royal Oaks Dr #C, Duarte, CA 91010", city: "Duarte", type: null,
      beds: null, baths: null, bedsLabel: null, bedsBath: null, sqft: null,
      rent: null, rentNum: null, inBudget: null, budgetStatus: "call",
      distance: "—", distLabel: "—", phone: "(626) 808-8055",
      url: null,
      special: null, freeMonths: 0, tag: "priority",
      tourTime: "11:00 AM", tourDate: "Tour Fri 6/5 · 11 AM",
      agent: "Margarit Torgomyan", agentPhone: "(626) 808-8055",
      notes: "Agent: Margarit Torgomyan · verify details at tour",
      img: null,
      hasGym: false, availText: "Tour booked", availType: "now", amenities: 25,
      cs_min: 8, cs_mi: "~1 mi", hh_min: 95, plan: "Tour booked — verify at tour", isNew: false
    },
    {
      id: "walnut-417", name: "417 E. Walnut Ave #A", short: "417 E. Walnut Ave #A",
      address: "417 E. Walnut Ave #A, Monrovia, CA 91016", city: "Monrovia", type: "Apartment",
      beds: 2, baths: 1, bedsLabel: "2BR 1BA", bedsBath: "2BD/1BA", sqft: 900,
      rent: "$2,995/mo", rentNum: 2995, inBudget: true, budgetStatus: "under",
      distance: "~2.5 mi", distLabel: "~2.5 mi", phone: "(626) 808-8055",
      url: "https://www.rent.com/r/417-e-walnut-ave-monrovia-ca-lv2993284195",
      special: null, freeMonths: 0, tag: "priority",
      tourTime: "12:00 PM", tourDate: "Tour Fri 6/5 · 12 PM",
      agent: "Sonia Lang", agentPhone: null,
      notes: "Agent: Sonia Lang · 2BR (under $3K) — Downtown Monrovia",
      img: null,
      hasGym: false, availText: "Tour booked", availType: "now", amenities: 25,
      cs_min: 9, cs_mi: "2.5 mi", hh_min: 85, plan: "Apartment · Downtown Monrovia", isNew: false
    },
    {
      id: "gladys-716", name: "716 Gladys Ave", short: "716 Gladys Ave",
      address: "716 Gladys Ave, Monrovia, CA 91016", city: "Monrovia", type: "House",
      beds: null, baths: null, bedsLabel: null, bedsBath: null, sqft: null,
      rent: null, rentNum: null, inBudget: null, budgetStatus: "call",
      distance: "~1 mi", distLabel: "~1 mi", phone: "—",
      url: null,
      special: null, freeMonths: 0, tag: "priority",
      tourTime: "1:00 PM", tourDate: "Tour Fri 6/5 · 1 PM",
      agent: null, agentPhone: null,
      notes: "Tour booked Fri 6/5 1PM (Family calendar) · verify beds/price at tour",
      img: null,
      hasGym: false, availText: "Tour booked", availType: "now", amenities: 25,
      cs_min: 9, cs_mi: "~1 mi", hh_min: 85, plan: "House · verify at tour", isNew: true
    },
    // ===== OUT-OF-BUDGET / REFERENCE FINDS =====
    {
      id: "junipero-1014", name: "1014 Junipero Dr", short: "1014 Junipero Dr",
      address: "1014 Junipero Dr, Duarte, CA 91010", city: "Duarte", type: "House",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 1178,
      rent: "$2,950/mo", rentNum: 2950, inBudget: false, budgetStatus: "under",
      distance: "~2.5 mi", distLabel: "~2.5 mi", phone: "(909) 268-2722",
      url: "https://www.apartments.com/1014-junipero-dr-duarte-ca/yhxq7jr/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "Slightly under $3K budget minimum — worth a call",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 8, cs_mi: "~2.5 mi", hh_min: 95, plan: "House for rent", isNew: false
    },
    {
      id: "spruce-2911", name: "2911 Spruce Ct", short: "2911 Spruce Ct",
      address: "2911 Spruce Ct, Arcadia, CA 91006", city: "Arcadia", type: "House",
      beds: 3, baths: 2.5, bedsLabel: "3BR 2.5BA", bedsBath: "3BD/2.5BA", sqft: 2200,
      rent: "$4,350/mo", rentNum: 4350, inBudget: false, budgetStatus: "slightly-over",
      distance: "~2 mi", distLabel: "~2 mi", phone: "(626) 628-2516",
      url: "https://www.apartments.com/2911-spruce-ct-arcadia-ca/cqltwed/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "$50 over budget but 2,200 sqft · 12-month lease",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 8, cs_mi: "~2 mi", hh_min: 80, plan: "House · 12-mo lease", isNew: false
    },
    {
      id: "santaanita-503-house", name: "503 N Santa Anita Ave (House)", short: "503 N Santa Anita (House)",
      address: "503 N Santa Anita Ave, Arcadia, CA 91006", city: "Arcadia", type: "House",
      beds: 3, baths: 3, bedsLabel: "3BR 3BA", bedsBath: "3BD/3BA", sqft: 1960,
      rent: "$4,500/mo", rentNum: 4500, inBudget: false, budgetStatus: "slightly-over",
      distance: "~2 mi", distLabel: "~2 mi", phone: "(626) 654-4117",
      url: "https://www.apartments.com/503-n-santa-anita-ave-arcadia-ca/g6wextz/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "NEW 2026-06-01 · $200 over budget · large 3BR/3BA 1,960 sqft",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 8, cs_mi: "~2 mi", hh_min: 80, plan: "House for rent", isNew: false
    },
    {
      id: "santaanita-503-townhome", name: "503 N Santa Anita Ave (Townhome)", short: "503 N Santa Anita (Townhome)",
      address: "503 N Santa Anita Ave, Arcadia, CA 91006 (townhome)", city: "Arcadia", type: "Townhome",
      beds: 3, baths: 2.5, bedsLabel: "3BR 2.5BA", bedsBath: "3BD/2.5BA", sqft: 1892,
      rent: "$4,550/mo", rentNum: 4550, inBudget: false, budgetStatus: "slightly-over",
      distance: "~2 mi", distLabel: "~2 mi", phone: "—",
      url: "https://www.apartments.com/503-n-santa-anita-ave-arcadia-ca/rxp6g61/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "NEW 2026-06-01 · $250 over budget · separate townhome listing at same address",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 8, cs_mi: "~2 mi", hh_min: 80, plan: "Townhome for rent", isNew: false
    },
    {
      id: "woodland-18", name: "18 Woodland Ln", short: "18 Woodland Ln",
      address: "18 Woodland Ln, Arcadia, CA 91006", city: "Arcadia", type: "House",
      beds: 3, baths: 2, bedsLabel: "3BR 2BA", bedsBath: "3BD/2BA", sqft: 2418,
      rent: "$6,600/mo", rentNum: 6600, inBudget: false, budgetStatus: "well-over",
      distance: "~2.5 mi", distLabel: "~2.5 mi", phone: "(626) 718-3294",
      url: "https://www.apartments.com/18-woodland-ln-arcadia-ca/rd9eqs3/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "NEW 2026-06-01 · well over budget · large 2,418 sqft",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 8, cs_mi: "~2.5 mi", hh_min: 80, plan: "House for rent", isNew: false
    },
    {
      id: "norumbega-1070", name: "1070 Norumbega Dr", short: "1070 Norumbega Dr",
      address: "1070 Norumbega Dr, Monrovia, CA 91016", city: "Monrovia", type: "House",
      beds: 3, baths: 3, bedsLabel: "3BR 3BA", bedsBath: "3BD/3BA", sqft: 2231,
      rent: "$7,500/mo", rentNum: 7500, inBudget: false, budgetStatus: "well-over",
      distance: "~2 mi", distLabel: "~2 mi", phone: "(323) 376-7235",
      url: "https://www.apartments.com/1070-norumbega-dr-monrovia-ca/telpzw8/",
      special: null, freeMonths: 0, tag: "nearby",
      tourTime: null, tourDate: null, notes: "NEW 2026-06-01 · well over budget · Norumbega foothills",
      img: null,
      hasGym: false, availText: "Available", availType: "now", amenities: 25,
      cs_min: 8, cs_mi: "~2 mi", hh_min: 85, plan: "House for rent", isNew: false
    }
  ];

  // -------------------------------------------------------------------
  // STATS — computed from the data (not hardcoded)
  // -------------------------------------------------------------------
  var esperanza = priorityProperties.filter(function (p) { return p.id === "esperanza"; })[0];
  var esperanza3br = esperanza ? esperanza.units.length : 0;

  // Nearby finds = listings tagged "nearby" (individual rentals + complexes +
  // reference finds) plus the booked-tour listings the tracker counts.
  var nearbyFinds = listings.filter(function (l) {
    return l.tag === "nearby";
  }).length;

  // In-budget count across all listings (rentNum present & within budget).
  var inBudgetCount = listings.filter(function (l) {
    return l.rentNum != null && l.rentNum >= meta.budgetMin && l.rentNum <= BUDGET_MAX;
  }).length;

  var stats = {
    priorityProperties: priorityProperties.length, // 3
    esperanza3br: esperanza3br,                     // 3
    nearbyFinds: nearbyFinds,
    inBudgetCount: inBudgetCount,
    toursBooked: tours.length                        // 5
  };

  // -------------------------------------------------------------------
  window.RENTAL_DATA = {
    meta: meta,
    priorityProperties: priorityProperties,
    tours: tours,
    listings: listings,
    stats: stats,
    classify: classify
  };
})();
