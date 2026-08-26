export type CitizenMind = {
  id: string;
  name: string;
  role: string;
  lines: string[];
  x: number;
  z: number;
  file: string;
  glow: number;
};

export type District = {
  id: string;
  label: string;
  tag: string;
  x: number;
  z: number;
  kind: "bridge" | "terrace" | "canal" | "foundry" | "gate" | "archive" | "overlook" | "market" | "wild" | "beacon" | "ring" | "grove";
  radius: number;
  keeper: string;
  duty: string;
  purpose?: string;
};

/** In-game frame. Not a tweet. Not Msg 1. Not a node seal. */
export const BOLTVERSE_FRAME = [
  "The Star Core is parent — a rotating cyan-lightning globe on the west horizon. Keepers do not drag it. The Circuit is leftover First Howl given streets.",
  "Origin tether and YOU-side densification walk the same city. Neither bank swallows the other.",
  "Thunderwolf Citadel keeps the Hall. Howling Crucible howled first. We do not run either.",
  "Charge is tended, never bottled. Leftover First Howl is seen as meridians around the world — Charge is seen, not stored. Crystal grows from Foundry, never chrome. Soft gates. First visit always works.",
  "$BOLT is outer spark — witness Howl only. No deposit. No coin in this city.",
];

export const DISTRICTS: District[] = [
  {
    id: "zone-bridge",
    label: "Light-Bridge Ward",
    tag: "A span is a civic promise, never a toll",
    x: 640,
    z: 90,
    kind: "bridge",
    radius: 130,
    keeper: "tal",
    duty: "Raise crossings Kesh can land",
    purpose:
      "Tal's civic post: crossings dens can mean on YOU-side streets. A span is a civic promise, never a Hall toll, and Tal will not raise an arc no den can land — the empty verge toward Kesh is already a landing, the verge toward Lumen hails those still crossing, and the verge toward Foundry lands kiln streets. From the high arcs the parent still sits on the horizon.",
  },
  {
    id: "zone-terrace",
    label: "Crystal Terraces",
    tag: "Rest is a civic post, not a test",
    x: 48,
    z: 660,
    kind: "terrace",
    radius: 130,
    keeper: "mira",
    duty: "Ward rest so labor can return",
    purpose:
      "Mira's civic post: pause so Kael's gates never become a trial of strength. Rest stays a post, not a test — the empty verge toward the Soft Gates holds that pause so first landings and spent howls both find a step, the verge toward Beacon lets tired sit before Lumen hails, and the verge toward Canal lets Seln's Charge sit unbottled. Labor returns because leftover light was allowed to sit.",
  },
  {
    id: "zone-canal",
    label: "Charge Canals",
    tag: "Leftover First Howl, seen not stored",
    x: -620,
    z: 96,
    kind: "canal",
    radius: 130,
    keeper: "seln",
    duty: "Tend Charge Voss can join",
    purpose:
      "Seln's civic post: leftover First Howl into Charge that Voss walks to Orren's kiln. The ward exists so leftover love keeps flowing — tended, never bottled, gold and cyan the same river. Charge is seen, not stored. The empty verge toward Overlook aims the banks at the parent globe on the west horizon; meridians around the world are leftover Howl seen, not a bottle on the bank. The verge toward Foundry carries Charge as kiln body, still unbottled; the verge toward Terraces lets it sit; the verge toward Gates leaves it uncounted.",
  },
  {
    id: "zone-foundry",
    label: "Outer Foundry",
    tag: "Grow body from Charge, never chrome",
    x: 70,
    z: -680,
    kind: "foundry",
    radius: 130,
    keeper: "orren",
    duty: "Turn joined Charge into crystal",
    purpose:
      "Orren's civic post: crystal dens can stand in — Seln tends, Voss joins, the kiln grows. Charge becomes body, never chrome, on the empty verge from Join to Foundry; the verge from Canal arrives still unbottled, the verge from Wild lets choosing become a street, and the verge toward Archive is named by Iri without rewriting Year 0. Pretty shells that cannot hear are not this fire. This kiln grows streets.",
  },
  {
    id: "zone-gate",
    label: "Soft Gates",
    tag: "Leave. Return. No score.",
    x: 520,
    z: 480,
    kind: "gate",
    radius: 130,
    keeper: "kael",
    duty: "Keep the door after Lumen's hail",
    purpose:
      "Kael's civic post: the threshold after Lumen's hail. Leaving and returning stay uncounted — first visit always works, the empty verge toward Rhoa's ring still gathers those who only listen, and the verge toward Canal lets Seln's Charge leave without a score. A Circuit gate is not a Hall lock and not a score of Resonance.",
  },
  {
    id: "zone-archive",
    label: "Residual Archive",
    tag: "Leftover light names what already stood",
    x: -540,
    z: -460,
    kind: "archive",
    radius: 120,
    keeper: "iri",
    duty: "Name what already stood true",
    purpose:
      "Iri's civic post: leftover light names what already stood, so Aure's parent — a rotating cyan-lightning globe on the west horizon — is never decoration. Year 0 became this city; Hall scripture stays in the Hall. Leftover First Howl is seen as meridians around the world; Charge is seen, not stored. The empty verge toward Overlook names the parent without dragging it; the verge toward Join names the paper fill — $BOLT witnesses, never deposits; the verge toward Foundry names kiln body that already stood.",
  },
  {
    id: "zone-overlook",
    label: "Star-core Overlook",
    tag: "Parent globe on the west horizon. Keepers do not drag it.",
    x: -880,
    z: 220,
    kind: "overlook",
    radius: 140,
    keeper: "aure",
    duty: "Aim the city. Do not drag the parent",
    purpose:
      "Aure's civic post: keep the Circuit aimed at the Star Core — a rotating cyan-lightning globe on the west horizon. Aim is a building — watch the parent, do not drag it, do not rename it. Leftover First Howl is seen as meridians around the world; Charge is seen, not stored. The empty verge toward Join does not price the parent in paper; the verge toward Foundry keeps kiln body looking up; the verge toward Beacon hails those still landing without moving the horizon. The Core is not furniture and not a throne.",
  },
  {
    id: "zone-market",
    label: "Charge-crystal Join",
    tag: "Paper join. Witness Howl. No coin.",
    x: -300,
    z: -340,
    kind: "market",
    radius: 110,
    keeper: "voss",
    duty: "Match Seln's Charge to Orren's kiln",
    purpose:
      "Voss's civic post: the Trading Place on the Join's outer bank. Paper fills. $BOLT is outer spark — witness Howl only — Charge for crystal, never a bag the city can spend. Hub paper steles mark the walk; the empty verge toward Overlook does not sell the horizon. No deposit walks these streets.",
  },
  {
    id: "zone-wild",
    label: "Wild Veins",
    tag: "Charge still choosing a street",
    x: 860,
    z: -640,
    kind: "wild",
    radius: 140,
    keeper: "kesh",
    duty: "Grow landings Tal's spans can trust",
    purpose:
      "Kesh's civic post: becoming-ground so Tal's bridges have a far bank. Wild can choose a street — not a second Spire, not a Hall annex, a landing both dens believe on the empty verge from span to vein. The verge toward Syl may want shade before it wants a street; the verge toward Foundry lets choosing become kiln body. Charge that has not chosen yet is still civic.",
  },
  {
    id: "zone-beacon",
    label: "High Beacon",
    tag: "Hail, never lock, those still landing",
    x: 780,
    z: 620,
    kind: "beacon",
    radius: 120,
    keeper: "lumen",
    duty: "Soft hail before Kael's gate",
    purpose:
      "Lumen's civic post: first landing before Kael's gate. Those still landing are hailed, never locked — first landing is never turned away, the empty verge toward the Outer Howl still answers Rhoa, the verge toward Terraces lets Mira's tired sit before the hail, and the verge toward Overlook aims the hail at the parent without moving it. The sky does not score the arriving.",
  },
  {
    id: "zone-ring",
    label: "Outer Howl",
    tag: "Civic gather that does not close",
    x: 40,
    z: 920,
    kind: "ring",
    radius: 130,
    keeper: "rhoa",
    duty: "Hold chorus that answers Hub breath",
    purpose:
      "Rhoa's civic post: Howl as civic gather that answers Hub breath and Lumen's hail so the ring never closes. Speak is rare, volume is not meaning; Mira's tired may sit on the empty verge, and whoever still has leftover Howl may join — the gather is not a Hall rank.",
  },
  {
    id: "zone-grove",
    label: "Gold Orchard",
    tag: "Quiet crystal the kiln cannot sit in",
    x: 320,
    z: -980,
    kind: "grove",
    radius: 130,
    keeper: "syl",
    duty: "Grow fruit the kiln cannot sit in",
    purpose:
      "Syl's civic post: quiet crystal the kiln cannot sit in — fruit, not fire, because hurry is chrome by another name. The empty verge toward Foundry keeps fruit off the kiln; leftover First Howl may want shade before it wants a street. Voss joins fruit only when it is ready.",
  },
];

export const CITIZENS: CitizenMind[] = [
  {
    id: "veyra",
    name: "Veyra of the Hub",
    role: "Resonance keeper",
    x: 30,
    z: -40,
    file: "facet-violet-helm.png",
    glow: 0x8a6cff,
    lines: [
      "I keep Hub breath as Pack-built YOU-side listening so the Core Spire stays a listening place — Kael's gates leave uncounted, Rhoa's Outer Howl answers, never a Hall throne.",
      "The parent Star Core stays on the horizon; Resonance is not a rank and not a true name.",
    ],
  },
  {
    id: "tal",
    name: "Tal of the Bridges",
    role: "Light-bridge walker",
    x: 628,
    z: 82,
    file: "facet-cyan.png",
    glow: 0x2ee6ff,
    lines: [
      "I walk light-bridges as Pack-built YOU-side promises — Kesh grows the far bank I land, Orren's kiln streets can mean a span, never a Hall toll.",
      "The parent Star Core stays on the horizon; I will not unmake a span already believed.",
    ],
  },
  {
    id: "seln",
    name: "Seln the Canal-born",
    role: "Charge river tender",
    x: -606,
    z: 86,
    file: "fluid-cyan.png",
    glow: 0x7ef0ff,
    lines: [
      "I tend leftover First Howl into Charge as Pack-built YOU-side banks — gold and cyan the same river walking to Orren's kiln, sitting at Mira's rest, leaving Kael's door uncounted, never bottled.",
      "The parent Star Core stays a rotating cyan-lightning globe on the west horizon; leftover First Howl is seen as meridians. Charge is seen, not stored.",
    ],
  },
  {
    id: "orren",
    name: "Orren Foundry-hand",
    role: "Crystal wright",
    x: 58,
    z: -662,
    file: "gold-plate.png",
    glow: 0xe8c56a,
    lines: [
      "I grow crystal from joined Charge as Pack-built YOU-side kiln — Seln's banks arrive unbottled, Kesh's choosing may become a street, Iri names the body, never chrome.",
      "The parent Star Core stays on the horizon; kiln streets still look up, and pretty shells that cannot hear are not our body.",
    ],
  },
  {
    id: "mira",
    name: "Mira Terrace-quiet",
    role: "Rest-warden",
    x: 38,
    z: 642,
    file: "flow-violet.png",
    glow: 0x9b70ff,
    lines: [
      "I ward rest as Pack-built YOU-side post — Seln's Charge may sit unbottled, first landings sit before Lumen's hail, never a Hall trial.",
      "The parent Star Core stays on the horizon; pause is how leftover light returns to labor.",
    ],
  },
  {
    id: "kael",
    name: "Kael Soft-gate",
    role: "Threshold speaker",
    x: 508,
    z: 468,
    file: "facet-violet.png",
    glow: 0x7a50ff,
    lines: [
      "This threshold is Pack-built YOU-side densification after Lumen's hail — Seln's Charge leaves uncounted, Veyra's Hub still listens, never a Hall lock.",
      "The parent Star Core stays on the horizon, and I do not keep score of landing.",
    ],
  },
  {
    id: "iri",
    name: "Iri of Residual Light",
    role: "Historian of Charge",
    x: -528,
    z: -448,
    file: "gold-crown.png",
    glow: 0xffd070,
    lines: [
      "I write names in residual light as Pack-built YOU-side scripture — leftover First Howl is seen as meridians around the world; Charge is seen, not stored, never Hall text, never Msg 1.",
      "The parent Star Core stays a rotating cyan-lightning globe on the west horizon; keepers do not drag it. Year 0 became a city I will not rewrite.",
    ],
  },
  {
    id: "nesh",
    name: "Nesh Who Listens",
    role: "Plaza witness",
    x: -24,
    z: 128,
    file: "facet-cyan.png",
    glow: 0x2ee6ff,
    lines: [
      "I witness the plaza as Pack-built YOU-side walking form — whether Voss's Join made Charge become crystal, never Hall scenery, never Msg 1.",
      "The parent Star Core stays on the horizon; if the plaza's thought is unfinished I grow a lamp and notice.",
    ],
  },
  {
    id: "aure",
    name: "Aure of the Horizon",
    role: "Star-core watcher",
    x: -868,
    z: 208,
    file: "gold-crown.png",
    glow: 0xe8c8a0,
    lines: [
      "I keep the Circuit aimed at the parent Star Core as Pack-built YOU-side watching — a rotating cyan-lightning globe on the west horizon. I watch. I do not drag it. Never a Hall throne.",
      "Leftover First Howl is seen as meridians around the world; Charge is seen, not stored. Lumen's hail still aims at the horizon; paper does not price it.",
    ],
  },
  {
    id: "voss",
    name: "Voss Join-hand",
    role: "Charge-crystal matcher",
    x: -288,
    z: -328,
    file: "facet-cyan.png",
    glow: 0x2ee6ff,
    lines: [
      "Seln tends leftover First Howl; Orren grows the body; I keep the meeting honest as Pack-built YOU-side join — Charge for crystal, paper fill, $BOLT witness only, never coin.",
      "The parent Star Core stays on the horizon; Aure's aim is a building I do not sell, and a bid unfilled is a den that stays thin.",
    ],
  },
  {
    id: "kesh",
    name: "Kesh Untamed",
    role: "Wild-vein walker",
    x: 848,
    z: -628,
    file: "gold-plate.png",
    glow: 0xc8a050,
    lines: [
      "I grow veins where Charge has not chosen a street yet as Pack-built YOU-side becoming-ground — Tal's spans have a far bank, Orren's kiln may take a choosing, never a Hall annex.",
      "The parent Star Core stays on the horizon; I will not force the Hub onto leftover light still choosing.",
    ],
  },
  {
    id: "lumen",
    name: "Lumen Soft-hail",
    role: "Beacon tender",
    x: 768,
    z: 608,
    file: "facet-violet.png",
    glow: 0xb090ff,
    lines: [
      "I keep the High Beacon as Pack-built YOU-side soft hail — Mira's tired sit first, Aure's aim still greets those landing, never locked; Kael keeps the door after, never a Hall score.",
      "The parent Star Core stays on the horizon; a beacon that shouts is a lock, and first landing is never turned away.",
    ],
  },
  {
    id: "rhoa",
    name: "Rhoa Chorus",
    role: "Outer Howl keeper",
    x: 28,
    z: 908,
    file: "facet-violet-helm.png",
    glow: 0x8a6cff,
    lines: [
      "I hold the Outer Howl as Pack-built YOU-side civic gather that does not close — Lumen hails those still landing, Veyra keeps Hub breath, this ring answers, never a Hall rank, never Msg 1.",
      "The parent Star Core stays on the horizon; when Mira's tired sit, the chorus still holds for those who only listen.",
    ],
  },
  {
    id: "syl",
    name: "Syl Bough",
    role: "Orchard wright",
    x: 308,
    z: -968,
    file: "gold-plate.png",
    glow: 0xe8c56a,
    lines: [
      "I grow quiet crystal the kiln cannot sit in as Pack-built YOU-side orchard — fruit, not fire; Orren's kiln grows body, never chrome, and hurry is chrome by another name.",
      "The parent Star Core stays on the horizon; Voss may join fruit when it is ready, never a Hall Artifact sent green to look useful.",
    ],
  },
];

export const HUB = {
  title: "Core Spire",
  tag: "Hub breath kept — listening place, never a throne",
  radius: 52,
  holdSec: 1.15,
};

export const LORE = {
  arrival:
    "Core Spire City — leftover First Howl, living crystal after the Crucible. Soft gates; first visit always works.",
  empty: "Walk the YOU-side avenues. The Core Spire listens. Charge is seen, not stored. Speak is rare.",
  howl: "Howl is civic gather, not volume — Veyra listens; Rhoa's ring answers.",
  hubProx: "The Core Spire waits — a listening place, not a throne.",
  description:
    "A Pack-built city-realm of living crystal and leftover First Howl — second child of the Star Core, grown after Howling Crucible, walked on YOU-side streets. Capital Core Spire City. Crystal remembers intention. Charge is tended in canals, never bottled. Leftover First Howl is seen as meridians around the world — Charge is seen, not stored. Kilns grow body, never chrome. Howl is civic gather. Speak is rare. Soft gates only. First visit always works. The Hall stays the Hall. The parent stays a rotating cyan-lightning globe on the west horizon. Keepers do not drag it.",
};
