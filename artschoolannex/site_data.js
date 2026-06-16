/* =====================================================================
   site_data.js — SINGLE SOURCE OF TRUTH for the New Chapter MOVE-IN plan
   ---------------------------------------------------------------------
   The rental SEARCH is complete: approved for Esperanza at Duarte Station,
   Unit 229. This file now drives the MOVE-IN PROJECT PLAN dashboard
   (index.html reads window.MOVEIN_DATA). Nothing is hardcoded in the page.

   Move-in date: Saturday, June 27, 2026 — must be completed by 5 PM.
   ===================================================================== */
(function () {

  // -------------------------------------------------------------------
  // META
  // -------------------------------------------------------------------
  var meta = {
    moveInISO: "2026-06-27T17:00:00",
    moveInLabel: "Saturday, June 27, 2026",
    moveInDeadline: "All move-ins must be completed by 5:00 PM",
    community: "Esperanza at Duarte Station",
    unit: "Unit 229",
    address: "1700 Fasana Road #229, Duarte, CA 91010",
    leasingPhone: "(626) 775-2882",
    leaseEmail: "esperanza@hollandpartnergroup.com",
    residents: ["Heather", "Mike (Michael)", "Daughter (14)"],
    leaseholders: ["Michael", "Heather"],
    parking: "Open / first-come, first-served (not assigned). Arrive early on move-in day for a close spot to unload.",
    note: "If your unit is on-notice and the current resident cancels, the office may push the date or reassign the unit — they will contact you if so."
  };

  // -------------------------------------------------------------------
  // CRITICAL PATH — required to get keys (on or before June 27)
  // The office will NOT release keys if any of these are missing.
  // -------------------------------------------------------------------
  var mustHaves = [
    {
      id: "lease",
      title: "E-sign the lease (both leaseholders)",
      due: "Before move-in date",
      urgent: true,
      detail: "Review and electronically sign the lease in RentCafe. BOTH Michael and Heather must sign before June 27 — keys cannot be released until it is fully signed.",
      action: "Sign in RentCafe"
    },
    {
      id: "snappt",
      title: "Complete SNAPPT ID verification",
      due: "Before move-in date",
      urgent: true,
      detail: "SNAPPT identity verification MUST be completed before move-in day for every leaseholder.",
      action: "Complete SNAPPT"
    },
    {
      id: "insurance",
      title: "Get renter's insurance + send declaration page",
      due: "Policy must start on or before lease start date",
      urgent: true,
      detail: "Required: $300,000 minimum Personal Liability · all leaseholders listed · apartment address as insured address · Additional Interested Party = HLD APT Esperanza LLC, 1700 Fasana Rd, Duarte CA 91010 (esperanza@hollandpartnergroup.com). Email a copy of the Declaration Page / Proof of Insurance on or before move-in.",
      action: "Assurant (assurantrenters.com/Holland) or your own carrier"
    },
    {
      id: "electric",
      title: "Set up electric service (SoCal Edison)",
      due: "Active for June 27",
      urgent: true,
      detail: "Call SCE (800) 655-4555. All appliances are electric EXCEPT the gas water heater. The meter is in a locked room — the meter reader must contact the leasing office (626) 775-2882 for access. Ask specifically for and write down your FULL account number (it is not emailed in full).",
      action: "SCE (800) 655-4555"
    },
    {
      id: "check",
      title: "Get cashier's check for $5,361",
      due: "Bring on move-in day",
      urgent: true,
      detail: "Cashier's check in the amount of $5,361, made payable to: HLD APT Esperanza LLC. Bring it to the move-in appointment.",
      action: "Get from your bank"
    },
    {
      id: "ids",
      title: "Bring government photo ID (every leaseholder)",
      due: "Move-in day",
      urgent: false,
      detail: "Each leaseholder must present a government-issued photo ID on or before move-in day.",
      action: "Bring physical IDs"
    },
    {
      id: "pets",
      title: "Complete pet / no-pet registration",
      due: "Before move-in date",
      urgent: false,
      detail: "Register on PetScreening even if you have NO pet. If you have a pet, you must provide vet proof: breed type, booster shots, vaccinations, proof of license, and a photo — before move-in.",
      action: "esperanzaatduartestation.petscreening.com"
    },
    {
      id: "present",
      title: "Both leaseholders present on move-in day",
      due: "June 27, before 5 PM",
      urgent: false,
      detail: "All leaseholders must be physically present at the move-in appointment. Move-in must be completed by 5:00 PM.",
      action: "Plan the day"
    }
  ];

  // -------------------------------------------------------------------
  // ACCOUNTS & UTILITIES to set up
  // -------------------------------------------------------------------
  var accounts = [
    {
      id: "sce",
      name: "Electric — Southern California Edison",
      required: true,
      contact: "(800) 655-4555",
      url: "https://www.sce.com",
      notes: "Set up before June 27. All-electric unit except gas water heater. Meter in locked room → reader calls leasing office (626) 775-2882 for access. Get your FULL account number in writing."
    },
    {
      id: "bai",
      name: "Internet — BAI Connect",
      required: false,
      contact: "Wendy Mayoral · wendy.m@baiconnect.com",
      url: "https://share.baiconnect.com/esperanzaliving",
      notes: "Building's fiber option. Schedule install early so you have WiFi on/near move-in day."
    },
    {
      id: "spectrum",
      name: "Internet — Spectrum (alt.)",
      required: false,
      contact: "Elie Kalo · (714) 345-4198 · elie.kalo@charter.com",
      url: "https://www.spectrum.com",
      notes: "Even if you already have Spectrum, call for special transfer incentives."
    },
    {
      id: "bilt",
      name: "Rent payments — BILT Rewards",
      required: true,
      contact: "—",
      url: "https://www.biltrewards.com",
      notes: "Resident online payment portal. Set up to pay rent (and earn points)."
    },
    {
      id: "parcel",
      name: "Packages — Parcel Pending",
      required: true,
      contact: "—",
      url: "",
      notes: "$25 one-time enrollment (cannot be waived). Enrollment link emailed upon move-in. Required — Esperanza does NOT accept packages on your behalf."
    },
    {
      id: "parking",
      name: "Guest parking — Parking Attendant",
      required: false,
      contact: "—",
      url: "http://esperanzaduartestation.parkingattendant.com",
      notes: "Register guests' vehicles. Resident parking is open / first-come."
    },
    {
      id: "fedex",
      name: "FedEx Delivery Manager (optional)",
      required: false,
      contact: "—",
      url: "https://www.fedex.com/apps/fdmenrollment/",
      notes: "Manage/redirect FedEx deliveries."
    },
    {
      id: "ups",
      name: "UPS My Choice (optional)",
      required: false,
      contact: "—",
      url: "https://www.ups.com/mobile/deliveryplanner?loc=en_US",
      notes: "Manage/redirect UPS deliveries."
    },
    {
      id: "usps",
      name: "USPS Informed Delivery + mail forwarding (optional)",
      required: false,
      contact: "—",
      url: "https://informeddelivery.usps.com/box/pages/intro/start.action",
      notes: "Preview incoming mail. Also file a USPS change-of-address / forward to #229."
    }
  ];

  // -------------------------------------------------------------------
  // TIMELINE / PHASES
  // -------------------------------------------------------------------
  var phases = [
    {
      id: "now",
      label: "This week (Jun 15–21)",
      tone: "urgent",
      heading: "Lock in the paperwork",
      tasks: [
        "E-sign the lease in RentCafe (Michael + Heather)",
        "Complete SNAPPT ID verification for both leaseholders",
        "Buy renter's insurance (Assurant/Holland or own carrier) with HLD APT Esperanza LLC as Additional Interested Party; email Declaration Page to the office",
        "Register pet / no-pet on PetScreening",
        "Call SCE to open electric service effective June 27; record full account number",
        "Schedule internet install (BAI Connect or Spectrum) for move-in weekend"
      ]
    },
    {
      id: "week",
      label: "Move-in week (Jun 22–26)",
      tone: "warn",
      heading: "Final prep",
      tasks: [
        "Confirm lease is fully e-signed and insurance dec page is received by the office",
        "Get the cashier's check for $5,361 payable to HLD APT Esperanza LLC",
        "Confirm move-in appointment time with leasing office (626) 775-2882",
        "Pack and label a 'First Night' box (see essentials list)",
        "Line up movers / truck / helpers and confirm furniture delivery windows",
        "Charge phones; gather all photo IDs in one folder with the check + insurance proof"
      ]
    },
    {
      id: "day",
      label: "Move-in day — Sat Jun 27",
      tone: "go",
      heading: "Get the keys (done by 5 PM)",
      tasks: [
        "Arrive early — both leaseholders present; parking is first-come so grab a close spot",
        "Bring: photo IDs (all leaseholders), cashier's check $5,361, proof of insurance",
        "Sign anything remaining, pay, and pick up keys at the leasing office",
        "Enroll in Parcel Pending ($25) using the emailed link",
        "Walk the unit and note any existing damage in writing/photos",
        "Move in the First Night box + beds first; confirm electric is on"
      ]
    },
    {
      id: "after",
      label: "First days & weeks",
      tone: "calm",
      heading: "Settle in",
      tasks: [
        "Internet install + set up WiFi router",
        "Set up BILT Rewards for rent payments",
        "File USPS change of address; update address on IDs, banks, school, subscriptions",
        "Deliver/assemble main furniture (beds, dining, couch, dressers)",
        "Set up daughter's room and study space for school",
        "Register guest vehicles in Parking Attendant as needed",
        "Stock kitchen, bathroom, and cleaning supplies fully"
      ]
    }
  ];

  // -------------------------------------------------------------------
  // ESSENTIALS — what you need to live comfortably (3 people)
  // "priority" = pack/buy before the 27th; rest can follow.
  // -------------------------------------------------------------------
  var essentials = [
    {
      room: "First Night Box (pack this first)",
      icon: "🌙",
      priority: true,
      items: [
        "Toilet paper + paper towels",
        "Bath towels + hand towels (everyone)",
        "Phone chargers + a power strip",
        "Medications + basic first-aid kit",
        "Toiletries: toothbrushes, toothpaste, soap, shampoo, deodorant",
        "Bedding for 3 beds (sheets, pillows, blankets)",
        "Change of clothes / pajamas for each person",
        "Snacks + water bottles",
        "Basic tools: screwdriver, scissors, box cutter, tape measure",
        "Trash bags + a few cleaning wipes",
        "Flashlight"
      ]
    },
    {
      room: "Bedrooms (3)",
      icon: "🛏️",
      priority: true,
      items: [
        "3 beds / mattresses (Heather & Mike, daughter)",
        "Sheets, pillows, pillowcases for each bed",
        "Comforters / blankets for each bed",
        "Nightstands + bedside lamps",
        "Dressers / clothing storage",
        "Hangers + closet organizers",
        "Curtains / blackout shades"
      ]
    },
    {
      room: "Bathroom(s)",
      icon: "🛁",
      priority: true,
      items: [
        "Shower curtain + liner + rings",
        "Bath mat + bath towels + hand towels + washcloths",
        "Toilet paper (stock up) + plunger + toilet brush",
        "Hand soap, shampoo, conditioner, body wash",
        "Toothbrush holder + cups",
        "Bathroom trash can",
        "Shower caddy / storage"
      ]
    },
    {
      room: "Kitchen",
      icon: "🍳",
      priority: true,
      items: [
        "Plates, bowls, cups/glasses, mugs (set of ~4–6)",
        "Silverware + cooking utensils (spatula, spoons, tongs)",
        "Pots + pans + a baking sheet",
        "Chef's knife + cutting board + can opener",
        "Dish soap, sponges, dish towels, drying rack",
        "Paper towels + kitchen trash can + trash bags",
        "Coffee maker / kettle",
        "Food storage containers + foil + plastic wrap",
        "Pantry staples + first grocery run (fridge/freezer basics)"
      ]
    },
    {
      room: "Living / Dining",
      icon: "🛋️",
      priority: false,
      items: [
        "Couch / seating",
        "Dining table + chairs (3+)",
        "TV + stand",
        "Floor or table lamps",
        "Coffee / side table",
        "Rug (optional)"
      ]
    },
    {
      room: "Cleaning & Household",
      icon: "🧹",
      priority: false,
      items: [
        "Broom + dustpan + mop",
        "Vacuum",
        "All-purpose cleaner, glass cleaner, disinfecting wipes",
        "Trash cans + bags for each room",
        "Laundry detergent + hamper",
        "Paper towels (bulk)"
      ]
    },
    {
      room: "Tech, Tools & Safety",
      icon: "🔧",
      priority: false,
      items: [
        "WiFi router (from internet provider)",
        "Power strips / surge protectors + extension cords",
        "Light bulbs + batteries (AA/AAA)",
        "Basic tool kit + cordless drill",
        "Command strips / hooks + picture-hanging kit",
        "Smoke / CO detector check + fire extinguisher",
        "First-aid kit"
      ]
    },
    {
      room: "Daughter's Room (school-ready)",
      icon: "🎒",
      priority: false,
      items: [
        "Bed + bedding + dresser",
        "Desk + chair + good lamp for homework",
        "Storage for school + art supplies (CS Arts)",
        "Power strip for devices",
        "Trash can + small mirror"
      ]
    }
  ];

  window.MOVEIN_DATA = {
    meta: meta,
    mustHaves: mustHaves,
    accounts: accounts,
    phases: phases,
    essentials: essentials
  };
})();
