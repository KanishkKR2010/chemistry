/* ============================================================
   MOLECULAR LAB
   Main JavaScript
============================================================ */


/* ============================================================
   MOLECULE DATABASE
============================================================ */
// =========================================================
// 3D BOND ANGLE DISPLAY
// =========================================================

let angleObjects = [];
let showAngles = true;
const molecules = [

/* ===================== DIATOMIC & SIMPLE MOLECULES ===================== */
   {
    name:"Hydrogen sulfide",
    formula:"H2S",
    category:"Gases",
    atoms:[
        ["S",0,0,0],
        ["H",-0.9,0.55,0],
        ["H",0.9,0.55,0]
    ],
    bonds:[[0,1,1],[0,2,1]],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~92°",
    polarity:"Polar"
},

{
    name:"Hydrogen selenide",
    formula:"H2Se",
    category:"Gases",
    atoms:[
        ["Se",0,0,0],
        ["H",-0.9,0.5,0],
        ["H",0.9,0.5,0]
    ],
    bonds:[[0,1,1],[0,2,1]],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~91°",
    polarity:"Polar"
},

{
    name:"Ammonia",
    formula:"NH3",
    category:"Bases",
    atoms:[
        ["N",0,0,0],
        ["H",1,0.6,0],
        ["H",-1,0.6,0],
        ["H",0,-0.9,0.7]
    ],
    bonds:[[0,1,1],[0,2,1],[0,3,1]],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"107°",
    polarity:"Polar"
},

{
    name:"Boron hydride",
    formula:"BH3",
    category:"Inorganic",
    atoms:[
        ["B",0,0,0],
        ["H",1.2,0,0],
        ["H",-0.6,1.04,0],
        ["H",-0.6,-1.04,0]
    ],
    bonds:[[0,1,1],[0,2,1],[0,3,1]],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Nonpolar"
},

{
    name:"Silicon tetrachloride",
    formula:"SiCl4",
    category:"Inorganic",
    atoms:[
        ["Si",0,0,0],
        ["Cl",1,1,1],
        ["Cl",-1,-1,1],
        ["Cl",-1,1,-1],
        ["Cl",1,-1,-1]
    ],
    bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Silicon tetrafluoride",
    formula:"SiF4",
    category:"Gases",
    atoms:[
        ["Si",0,0,0],
        ["F",1,1,1],
        ["F",-1,-1,1],
        ["F",-1,1,-1],
        ["F",1,-1,-1]
    ],
    bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Sulfur dichloride",
    formula:"SCl2",
    category:"Inorganic",
    atoms:[
        ["S",0,0,0],
        ["Cl",-1,0.7,0],
        ["Cl",1,0.7,0]
    ],
    bonds:[[0,1,1],[0,2,1]],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~103°",
    polarity:"Polar"
},

{
    name:"Carbonyl sulfide",
    formula:"COS",
    category:"Gases",
    atoms:[
        ["O",-1.2,0,0],
        ["C",0,0,0],
        ["S",1.2,0,0]
    ],
    bonds:[[0,1,2],[1,2,2]],
    shape:"Linear",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Carbon disulfide",
    formula:"CS2",
    category:"Gases",
    atoms:[
        ["S",-1.3,0,0],
        ["C",0,0,0],
        ["S",1.3,0,0]
    ],
    bonds:[[0,1,2],[1,2,2]],
    shape:"Linear",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Phosphorus tribromide",
    formula:"PBr3",
    category:"Inorganic",
    atoms:[
        ["P",0,0,0],
        ["Br",1.2,0.5,0],
        ["Br",-1.2,0.5,0],
        ["Br",0,-0.9,0.7]
    ],
    bonds:[[0,1,1],[0,2,1],[0,3,1]],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"~101°",
    polarity:"Polar"
},

/* ===================== 111–120: SULFUR / HALOGEN ===================== */

{
    name:"Sulfur dichloride monoxide",
    formula:"SOCl2",
    category:"Inorganic",
    atoms:[
        ["S",0,0,0],
        ["O",0,1.2,0],
        ["Cl",-1.1,-0.5,0],
        ["Cl",1.1,-0.5,0]
    ],
    bonds:[[0,1,2],[0,2,1],[0,3,1]],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"~109°",
    polarity:"Polar"
},

{
    name:"Sulfuryl chloride",
    formula:"SO2Cl2",
    category:"Inorganic",
    atoms:[
        ["S",0,0,0],
        ["O",1.1,0,0],
        ["O",-1.1,0,0],
        ["Cl",0,1.3,0],
        ["Cl",0,-1.3,0]
    ],
    bonds:[[0,1,2],[0,2,2],[0,3,1],[0,4,1]],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"~109.5°",
    polarity:"Polar"
},

{
    name:"Dichlorine monoxide",
    formula:"Cl2O",
    category:"Inorganic",
    atoms:[
        ["Cl",-1,0.5,0],
        ["O",0,0,0],
        ["Cl",1,0.5,0]
    ],
    bonds:[[0,1,1],[1,2,1]],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~110°",
    polarity:"Polar"
},

{
    name:"Chlorine dioxide",
    formula:"ClO2",
    category:"Gases",
    atoms:[
        ["Cl",0,0,0],
        ["O",-1,0.8,0],
        ["O",1,0.8,0]
    ],
    bonds:[[0,1,2],[0,2,1]],
    shape:"Bent",
    domains:3,
    hybridization:"sp2",
    angle:"~118°",
    polarity:"Polar"
},

{
    name:"Dinitrogen tetroxide",
    formula:"N2O4",
    category:"Gases",
    atoms:[
        ["N",-0.8,0,0],
        ["N",0.8,0,0],
        ["O",-1.5,0.9,0],
        ["O",-1.5,-0.9,0],
        ["O",1.5,0.9,0],
        ["O",1.5,-0.9,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,2],[0,3,1],
        [1,4,2],[1,5,1]
    ],
    shape:"Planar around N",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Phosphorus trioxide",
    formula:"P4O6",
    category:"Inorganic",
    atoms:[
        ["P",1,1,1],
        ["P",-1,-1,1],
        ["P",-1,1,-1],
        ["P",1,-1,-1],
        ["O",0,1.2,1.2],
        ["O",-1.2,0,1.2],
        ["O",-1.2,1.2,0],
        ["O",1.2,0,-1.2],
        ["O",1.2,-1.2,0],
        ["O",0,-1.2,-1.2]
    ],
    bonds:[
        [0,4,1],[0,5,1],[0,6,1],
        [1,4,1],[1,5,1],[1,7,1],
        [2,6,1],[2,7,1],[2,8,1],
        [3,8,1],[3,9,1],[3,7,1]
    ],
    shape:"Polyhedral",
    domains:4,
    hybridization:"sp3",
    angle:"~109.5°",
    polarity:"Nonpolar"
},

{
    name:"Sulfur hexafluoride",
    formula:"SF6",
    category:"Gases",
    atoms:[
        ["S",0,0,0],
        ["F",1.3,0,0],
        ["F",-1.3,0,0],
        ["F",0,1.3,0],
        ["F",0,-1.3,0],
        ["F",0,0,1.3],
        ["F",0,0,-1.3]
    ],
    bonds:[
        [0,1,1],[0,2,1],[0,3,1],
        [0,4,1],[0,5,1],[0,6,1]
    ],
    shape:"Octahedral",
    domains:6,
    hybridization:"sp3d2",
    angle:"90° / 180°",
    polarity:"Nonpolar"
},

{
    name:"Iodine monochloride",
    formula:"ICl",
    category:"Inorganic",
    atoms:[
        ["I",-0.8,0,0],
        ["Cl",0.8,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Bromine chloride",
    formula:"BrCl",
    category:"Inorganic",
    atoms:[
        ["Br",-0.85,0,0],
        ["Cl",0.85,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Hydrogen peroxide",
    formula:"H2O2",
    category:"Inorganic",
    atoms:[
        ["O",-0.7,0,0],
        ["O",0.7,0.3,0],
        ["H",-1.2,0.7,0.5],
        ["H",1.2,0.9,-0.5]
    ],
    bonds:[[0,1,1],[0,2,1],[1,3,1]],
    shape:"Nonlinear",
    domains:4,
    hybridization:"sp3",
    angle:"~94°",
    polarity:"Polar"
},

/* ===================== 121–130: ORGANIC ===================== */

{
    name:"Propane",
    formula:"C3H8",
    category:"Organic",
    atoms:[
        ["C",-1.3,0,0],
        ["C",0,0,0],
        ["C",1.3,0,0],
        ["H",-1.8,0.9,0],
        ["H",-1.8,-0.45,0.8],
        ["H",-1.8,-0.45,-0.8],
        ["H",0,1,0],
        ["H",0,-1,0],
        ["H",1.8,0.9,0],
        ["H",1.8,-0.45,0.8],
        ["H",1.8,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],[1,2,1],
        [0,3,1],[0,4,1],[0,5,1],
        [1,6,1],[1,7,1],
        [2,8,1],[2,9,1],[2,10,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Propene",
    formula:"C3H6",
    category:"Organic",
    atoms:[
        ["C",-1.3,0,0],
        ["C",0,0,0],
        ["C",1.3,0,0],
        ["H",-1.8,0.9,0],
        ["H",-1.8,-0.9,0],
        ["H",0,1.1,0],
        ["H",0,-1.1,0],
        ["H",1.8,0.9,0],
        ["H",1.8,-0.45,0.8],
        ["H",1.8,-0.45,-0.8]
    ],
    bonds:[
        [0,1,2],[1,2,1],
        [0,3,1],[0,4,1],
        [1,5,1],[1,6,1],
        [2,7,1],[2,8,1],[2,9,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"120° / 109.5°",
    polarity:"Nonpolar"
},

{
    name:"Propyne",
    formula:"C3H4",
    category:"Organic",
    atoms:[
        ["C",-1.3,0,0],
        ["C",0,0,0],
        ["C",1.2,0,0],
        ["H",-2,0,0],
        ["H",1.9,0.9,0],
        ["H",1.9,-0.45,0.8],
        ["H",1.9,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],
        [1,2,3],
        [0,3,1],
        [2,4,1],[2,5,1],[2,6,1]
    ],
    shape:"Linear at C≡C",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Butane",
    formula:"C4H10",
    category:"Organic",
    atoms:[
        ["C",-2,0,0],
        ["C",-0.7,0,0],
        ["C",0.7,0,0],
        ["C",2,0,0],
        ["H",-2.5,0.9,0],
        ["H",-2.5,-0.45,0.8],
        ["H",-2.5,-0.45,-0.8],
        ["H",-0.7,1,0],
        ["H",-0.7,-1,0],
        ["H",0.7,1,0],
        ["H",0.7,-1,0],
        ["H",2.5,0.9,0],
        ["H",2.5,-0.45,0.8],
        ["H",2.5,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],[1,2,1],[2,3,1],
        [0,4,1],[0,5,1],[0,6,1],
        [1,7,1],[1,8,1],
        [2,9,1],[2,10,1],
        [3,11,1],[3,12,1],[3,13,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Methanethiol",
    formula:"CH3SH",
    category:"Organic",
    atoms:[
        ["C",-0.8,0,0],
        ["S",0.6,0,0],
        ["H",-1.2,0.9,0],
        ["H",-1.2,-0.45,0.8],
        ["H",-1.2,-0.45,-0.8],
        ["H",1.2,0.7,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],[0,3,1],[0,4,1],
        [1,5,1]
    ],
    shape:"Tetrahedral / Bent",
    domains:4,
    hybridization:"sp3",
    angle:"109.5° / ~96°",
    polarity:"Polar"
},

{
    name:"Dimethyl sulfide",
    formula:"(CH3)2S",
    category:"Organic",
    atoms:[
        ["S",0,0,0],
        ["C",-1.3,0.7,0],
        ["C",1.3,0.7,0],
        ["H",-1.8,1.4,0],
        ["H",-1.8,0,0.8],
        ["H",-1.8,0,-0.8],
        ["H",1.8,1.4,0],
        ["H",1.8,0,0.8],
        ["H",1.8,0,-0.8]
    ],
    bonds:[
        [0,1,1],[0,2,1],
        [1,3,1],[1,4,1],[1,5,1],
        [2,6,1],[2,7,1],[2,8,1]
    ],
    shape:"Bent around S",
    domains:4,
    hybridization:"sp3",
    angle:"~99°",
    polarity:"Polar"
},

{
    name:"Nitromethane",
    formula:"CH3NO2",
    category:"Organic",
    atoms:[
        ["C",-1.2,0,0],
        ["N",0,0,0],
        ["O",1.1,0.8,0],
        ["O",1.1,-0.8,0],
        ["H",-1.7,0.9,0],
        ["H",-1.7,-0.45,0.8],
        ["H",-1.7,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],
        [1,2,2],
        [1,3,1],
        [0,4,1],[0,5,1],[0,6,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

{
    name:"Dimethylformamide",
    formula:"C3H7NO",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["N",-0.8,0.9,0],
        ["C",-1.4,-0.5,0],
        ["C",-1.7,1.8,0],
        ["H",-2.1,-1,0],
        ["H",-1.8,0,0.8],
        ["H",-1.8,0,-0.8]
    ],
    bonds:[
        [0,1,2],[0,2,1],[0,3,1],
        [2,4,1],
        [3,5,1],[3,6,1],[3,7,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Ethylene glycol",
    formula:"C2H6O2",
    category:"Organic",
    atoms:[
        ["C",-0.8,0,0],
        ["C",0.8,0,0],
        ["O",-1.5,0.9,0],
        ["O",1.5,0.9,0],
        ["H",-1.1,-0.9,0],
        ["H",-0.9,0,0.9],
        ["H",1.1,-0.9,0],
        ["H",0.9,0,0.9],
        ["H",-2,1.4,0],
        ["H",2,1.4,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],[0,4,1],[0,5,1],
        [1,3,1],[1,6,1],[1,7,1],
        [2,8,1],[3,9,1]
    ],
    shape:"Tetrahedral / Bent",
    domains:4,
    hybridization:"sp3",
    angle:"109.5° / ~104.5°",
    polarity:"Polar"
},

/* ===================== 131–140: COMMON ORGANIC FUNCTIONAL GROUPS ===================== */

{
    name:"Dimethyl carbonate",
    formula:"C3H6O3",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.7,0.9,0],
        ["O",-0.7,-0.9,0],
        ["C",-1.8,1.5,0],
        ["C",-1.8,-1.5,0]
    ],
    bonds:[
        [0,1,2],[0,2,1],[0,3,1],
        [2,4,1],[3,5,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Methyl acetate",
    formula:"C3H6O2",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.7,0.9,0],
        ["C",-0.7,-1.2,0],
        ["C",-1.8,1.5,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [2,4,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

{
    name:"Ethyl acetate",
    formula:"C4H8O2",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.7,0.9,0],
        ["C",-0.7,-1.2,0],
        ["C",-1.8,1.5,0],
        ["C",-2.8,1.5,0]
    ],
    bonds:[
        [0,1,2],[0,2,1],[0,3,1],
        [2,4,1],[4,5,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

{
    name:"Acetaldehyde oxime",
    formula:"C2H5NO",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["N",1.2,0,0],
        ["O",2.1,0.8,0],
        ["C",-1.2,0,0],
        ["H",-1.7,0.9,0],
        ["H",-1.7,-0.45,0.8],
        ["H",-1.7,-0.45,-0.8]
    ],
    bonds:[
        [0,1,2],
        [1,2,1],
        [0,3,1],
        [3,4,1],[3,5,1],[3,6,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Acetanilide",
    formula:"C8H9NO",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["N",-0.8,0.9,0],
        ["C",-1.4,-0.5,0]
    ],
    bonds:[
        [0,1,2],[0,2,1],[0,3,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Aniline",
    formula:"C6H7N",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.21,0],
        ["C",-0.7,1.21,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.21,0],
        ["C",0.7,-1.21,0],
        ["N",2.3,0,0]
    ],
    bonds:[
        [0,1,2],[1,2,1],[2,3,2],
        [3,4,1],[4,5,2],[5,0,1],
        [0,6,1]
    ],
    shape:"Planar ring / Pyramidal at N",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"120° / ~107°",
    polarity:"Polar"
},

{
    name:"Toluene",
    formula:"C7H8",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.21,0],
        ["C",-0.7,1.21,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.21,0],
        ["C",0.7,-1.21,0],
        ["C",2.5,0,0]
    ],
    bonds:[
        [0,1,2],[1,2,1],[2,3,2],
        [3,4,1],[4,5,2],[5,0,1],
        [0,6,1]
    ],
    shape:"Planar aromatic ring / Tetrahedral methyl",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"120° / 109.5°",
    polarity:"Nonpolar"
},

{
    name:"Styrene",
    formula:"C8H8",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.21,0],
        ["C",-0.7,1.21,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.21,0],
        ["C",0.7,-1.21,0],
        ["C",2.5,0,0],
        ["C",3.6,0,0]
    ],
    bonds:[
        [0,1,2],[1,2,1],[2,3,2],
        [3,4,1],[4,5,2],[5,0,1],
        [0,6,1],[6,7,2]
    ],
    shape:"Planar aromatic / Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Nonpolar"
},

{
    name:"Cyclohexane",
    formula:"C6H12",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.2,0],
        ["C",-0.7,1.2,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.2,0],
        ["C",0.7,-1.2,0]
    ],
    bonds:[
        [0,1,1],[1,2,1],[2,3,1],
        [3,4,1],[4,5,1],[5,0,1]
    ],
    shape:"Chair / Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"~109.5°",
    polarity:"Nonpolar"
},

{
    name:"Cyclohexene",
    formula:"C6H10",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.2,0],
        ["C",-0.7,1.2,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.2,0],
        ["C",0.7,-1.2,0]
    ],
    bonds:[
        [0,1,2],[1,2,1],[2,3,1],
        [3,4,1],[4,5,1],[5,0,1]
    ],
    shape:"Nonplanar ring",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Nonpolar"
},

/* ===================== 141–150: IMPORTANT BIO/GENERAL CHEMISTRY ===================== */

{
    name:"Glucose",
    formula:"C6H12O6",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["C",1.3,0,0],
        ["C",2.6,0,0],
        ["C",3.9,0,0],
        ["C",5.2,0,0],
        ["C",6.5,0,0],
        ["O",7.5,0.8,0]
    ],
    bonds:[
        [0,1,1],[1,2,1],[2,3,1],
        [3,4,1],[4,5,1],[5,6,1]
    ],
    shape:"Tetrahedral carbon centers",
    domains:4,
    hybridization:"sp3",
    angle:"~109.5°",
    polarity:"Polar"
},

{
    name:"Fructose",
    formula:"C6H12O6",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["C",1.3,0,0],
        ["C",2.6,0,0],
        ["C",3.9,0,0],
        ["C",5.2,0,0],
        ["C",6.5,0,0],
        ["O",2.6,1.2,0]
    ],
    bonds:[
        [0,1,1],[1,2,1],[2,3,1],
        [3,4,1],[4,5,1],[2,6,2]
    ],
    shape:"Tetrahedral / Trigonal planar",
    domains:4,
    hybridization:"sp3 / sp2",
    angle:"109.5° / 120°",
    polarity:"Polar"
},

{
    name:"Glycine",
    formula:"C2H5NO2",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["N",-1.2,0,0],
        ["C",1.2,0,0],
        ["O",2.2,0.8,0],
        ["O",2.2,-0.8,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [2,3,2],
        [2,4,1]
    ],
    shape:"Tetrahedral / Trigonal planar",
    domains:4,
    hybridization:"sp3 / sp2",
    angle:"109.5° / 120°",
    polarity:"Polar"
},

{
    name:"Carbonic acid",
    formula:"H2CO3",
    category:"Acids",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.6,1.04,0],
        ["O",-0.6,-1.04,0],
        ["H",-1.1,1.5,0],
        ["H",-1.1,-1.5,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [2,4,1],
        [3,5,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Polar"
},

{
    name:"Hydrogen carbonate",
    formula:"HCO3-",
    category:"Ions",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.6,1.04,0],
        ["O",-0.6,-1.04,0],
        ["H",-1.1,-1.5,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [3,4,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Polar"
},

{
    name:"Hydrogen sulfate",
    formula:"HSO4-",
    category:"Ions",
    atoms:[
        ["S",0,0,0],
        ["O",1.2,0,0],
        ["O",-1.2,0,0],
        ["O",0,1.2,0],
        ["O",0,-1.2,0],
        ["H",0,-1.8,0.5]
    ],
    bonds:[
        [0,1,2],
        [0,2,2],
        [0,3,1],
        [0,4,1],
        [4,5,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Polar"
},

{
    name:"Hydrogen phosphate",
    formula:"HPO4-2",
    category:"Ions",
    atoms:[
        ["P",0,0,0],
        ["O",1,1,1],
        ["O",-1,-1,1],
        ["O",-1,1,-1],
        ["O",1,-1,-1],
        ["H",1.5,-1.5,-1.5]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [4,5,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Polar"
},

{
    name:"Dihydrogen phosphate",
    formula:"H2PO4-",
    category:"Ions",
    atoms:[
        ["P",0,0,0],
        ["O",1,1,1],
        ["O",-1,-1,1],
        ["O",-1,1,-1],
        ["O",1,-1,-1],
        ["H",-1.5,1.5,-1.5],
        ["H",1.5,-1.5,-1.5]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [3,5,1],
        [4,6,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Polar"
},

{
    name:"Hydrogen sulfide ion",
    formula:"HS-",
    category:"Ions",
    atoms:[
        ["S",-0.7,0,0],
        ["H",0.7,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},


/* ===================== 101–110: SIMPLE INORGANIC ===================== */

{
    name:"Hydrogen sulfide",
    formula:"H2S",
    category:"Gases",
    atoms:[
        ["S",0,0,0],
        ["H",-0.9,0.55,0],
        ["H",0.9,0.55,0]
    ],
    bonds:[[0,1,1],[0,2,1]],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~92°",
    polarity:"Polar"
},

{
    name:"Hydrogen selenide",
    formula:"H2Se",
    category:"Gases",
    atoms:[
        ["Se",0,0,0],
        ["H",-0.9,0.5,0],
        ["H",0.9,0.5,0]
    ],
    bonds:[[0,1,1],[0,2,1]],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~91°",
    polarity:"Polar"
},

{
    name:"Ammonia",
    formula:"NH3",
    category:"Bases",
    atoms:[
        ["N",0,0,0],
        ["H",1,0.6,0],
        ["H",-1,0.6,0],
        ["H",0,-0.9,0.7]
    ],
    bonds:[[0,1,1],[0,2,1],[0,3,1]],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"107°",
    polarity:"Polar"
},

{
    name:"Boron hydride",
    formula:"BH3",
    category:"Inorganic",
    atoms:[
        ["B",0,0,0],
        ["H",1.2,0,0],
        ["H",-0.6,1.04,0],
        ["H",-0.6,-1.04,0]
    ],
    bonds:[[0,1,1],[0,2,1],[0,3,1]],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Nonpolar"
},

{
    name:"Silicon tetrachloride",
    formula:"SiCl4",
    category:"Inorganic",
    atoms:[
        ["Si",0,0,0],
        ["Cl",1,1,1],
        ["Cl",-1,-1,1],
        ["Cl",-1,1,-1],
        ["Cl",1,-1,-1]
    ],
    bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Silicon tetrafluoride",
    formula:"SiF4",
    category:"Gases",
    atoms:[
        ["Si",0,0,0],
        ["F",1,1,1],
        ["F",-1,-1,1],
        ["F",-1,1,-1],
        ["F",1,-1,-1]
    ],
    bonds:[[0,1,1],[0,2,1],[0,3,1],[0,4,1]],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Sulfur dichloride",
    formula:"SCl2",
    category:"Inorganic",
    atoms:[
        ["S",0,0,0],
        ["Cl",-1,0.7,0],
        ["Cl",1,0.7,0]
    ],
    bonds:[[0,1,1],[0,2,1]],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~103°",
    polarity:"Polar"
},

{
    name:"Carbonyl sulfide",
    formula:"COS",
    category:"Gases",
    atoms:[
        ["O",-1.2,0,0],
        ["C",0,0,0],
        ["S",1.2,0,0]
    ],
    bonds:[[0,1,2],[1,2,2]],
    shape:"Linear",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Carbon disulfide",
    formula:"CS2",
    category:"Gases",
    atoms:[
        ["S",-1.3,0,0],
        ["C",0,0,0],
        ["S",1.3,0,0]
    ],
    bonds:[[0,1,2],[1,2,2]],
    shape:"Linear",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Phosphorus tribromide",
    formula:"PBr3",
    category:"Inorganic",
    atoms:[
        ["P",0,0,0],
        ["Br",1.2,0.5,0],
        ["Br",-1.2,0.5,0],
        ["Br",0,-0.9,0.7]
    ],
    bonds:[[0,1,1],[0,2,1],[0,3,1]],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"~101°",
    polarity:"Polar"
},

/* ===================== 111–120: SULFUR / HALOGEN ===================== */

{
    name:"Sulfur dichloride monoxide",
    formula:"SOCl2",
    category:"Inorganic",
    atoms:[
        ["S",0,0,0],
        ["O",0,1.2,0],
        ["Cl",-1.1,-0.5,0],
        ["Cl",1.1,-0.5,0]
    ],
    bonds:[[0,1,2],[0,2,1],[0,3,1]],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"~109°",
    polarity:"Polar"
},

{
    name:"Sulfuryl chloride",
    formula:"SO2Cl2",
    category:"Inorganic",
    atoms:[
        ["S",0,0,0],
        ["O",1.1,0,0],
        ["O",-1.1,0,0],
        ["Cl",0,1.3,0],
        ["Cl",0,-1.3,0]
    ],
    bonds:[[0,1,2],[0,2,2],[0,3,1],[0,4,1]],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"~109.5°",
    polarity:"Polar"
},

{
    name:"Dichlorine monoxide",
    formula:"Cl2O",
    category:"Inorganic",
    atoms:[
        ["Cl",-1,0.5,0],
        ["O",0,0,0],
        ["Cl",1,0.5,0]
    ],
    bonds:[[0,1,1],[1,2,1]],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~110°",
    polarity:"Polar"
},

{
    name:"Chlorine dioxide",
    formula:"ClO2",
    category:"Gases",
    atoms:[
        ["Cl",0,0,0],
        ["O",-1,0.8,0],
        ["O",1,0.8,0]
    ],
    bonds:[[0,1,2],[0,2,1]],
    shape:"Bent",
    domains:3,
    hybridization:"sp2",
    angle:"~118°",
    polarity:"Polar"
},

{
    name:"Dinitrogen tetroxide",
    formula:"N2O4",
    category:"Gases",
    atoms:[
        ["N",-0.8,0,0],
        ["N",0.8,0,0],
        ["O",-1.5,0.9,0],
        ["O",-1.5,-0.9,0],
        ["O",1.5,0.9,0],
        ["O",1.5,-0.9,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,2],[0,3,1],
        [1,4,2],[1,5,1]
    ],
    shape:"Planar around N",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Phosphorus trioxide",
    formula:"P4O6",
    category:"Inorganic",
    atoms:[
        ["P",1,1,1],
        ["P",-1,-1,1],
        ["P",-1,1,-1],
        ["P",1,-1,-1],
        ["O",0,1.2,1.2],
        ["O",-1.2,0,1.2],
        ["O",-1.2,1.2,0],
        ["O",1.2,0,-1.2],
        ["O",1.2,-1.2,0],
        ["O",0,-1.2,-1.2]
    ],
    bonds:[
        [0,4,1],[0,5,1],[0,6,1],
        [1,4,1],[1,5,1],[1,7,1],
        [2,6,1],[2,7,1],[2,8,1],
        [3,8,1],[3,9,1],[3,7,1]
    ],
    shape:"Polyhedral",
    domains:4,
    hybridization:"sp3",
    angle:"~109.5°",
    polarity:"Nonpolar"
},

{
    name:"Sulfur hexafluoride",
    formula:"SF6",
    category:"Gases",
    atoms:[
        ["S",0,0,0],
        ["F",1.3,0,0],
        ["F",-1.3,0,0],
        ["F",0,1.3,0],
        ["F",0,-1.3,0],
        ["F",0,0,1.3],
        ["F",0,0,-1.3]
    ],
    bonds:[
        [0,1,1],[0,2,1],[0,3,1],
        [0,4,1],[0,5,1],[0,6,1]
    ],
    shape:"Octahedral",
    domains:6,
    hybridization:"sp3d2",
    angle:"90° / 180°",
    polarity:"Nonpolar"
},

{
    name:"Iodine monochloride",
    formula:"ICl",
    category:"Inorganic",
    atoms:[
        ["I",-0.8,0,0],
        ["Cl",0.8,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Bromine chloride",
    formula:"BrCl",
    category:"Inorganic",
    atoms:[
        ["Br",-0.85,0,0],
        ["Cl",0.85,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Hydrogen peroxide",
    formula:"H2O2",
    category:"Inorganic",
    atoms:[
        ["O",-0.7,0,0],
        ["O",0.7,0.3,0],
        ["H",-1.2,0.7,0.5],
        ["H",1.2,0.9,-0.5]
    ],
    bonds:[[0,1,1],[0,2,1],[1,3,1]],
    shape:"Nonlinear",
    domains:4,
    hybridization:"sp3",
    angle:"~94°",
    polarity:"Polar"
},

/* ===================== 121–130: ORGANIC ===================== */

{
    name:"Propane",
    formula:"C3H8",
    category:"Organic",
    atoms:[
        ["C",-1.3,0,0],
        ["C",0,0,0],
        ["C",1.3,0,0],
        ["H",-1.8,0.9,0],
        ["H",-1.8,-0.45,0.8],
        ["H",-1.8,-0.45,-0.8],
        ["H",0,1,0],
        ["H",0,-1,0],
        ["H",1.8,0.9,0],
        ["H",1.8,-0.45,0.8],
        ["H",1.8,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],[1,2,1],
        [0,3,1],[0,4,1],[0,5,1],
        [1,6,1],[1,7,1],
        [2,8,1],[2,9,1],[2,10,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Propene",
    formula:"C3H6",
    category:"Organic",
    atoms:[
        ["C",-1.3,0,0],
        ["C",0,0,0],
        ["C",1.3,0,0],
        ["H",-1.8,0.9,0],
        ["H",-1.8,-0.9,0],
        ["H",0,1.1,0],
        ["H",0,-1.1,0],
        ["H",1.8,0.9,0],
        ["H",1.8,-0.45,0.8],
        ["H",1.8,-0.45,-0.8]
    ],
    bonds:[
        [0,1,2],[1,2,1],
        [0,3,1],[0,4,1],
        [1,5,1],[1,6,1],
        [2,7,1],[2,8,1],[2,9,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"120° / 109.5°",
    polarity:"Nonpolar"
},

{
    name:"Propyne",
    formula:"C3H4",
    category:"Organic",
    atoms:[
        ["C",-1.3,0,0],
        ["C",0,0,0],
        ["C",1.2,0,0],
        ["H",-2,0,0],
        ["H",1.9,0.9,0],
        ["H",1.9,-0.45,0.8],
        ["H",1.9,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],
        [1,2,3],
        [0,3,1],
        [2,4,1],[2,5,1],[2,6,1]
    ],
    shape:"Linear at C≡C",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Butane",
    formula:"C4H10",
    category:"Organic",
    atoms:[
        ["C",-2,0,0],
        ["C",-0.7,0,0],
        ["C",0.7,0,0],
        ["C",2,0,0],
        ["H",-2.5,0.9,0],
        ["H",-2.5,-0.45,0.8],
        ["H",-2.5,-0.45,-0.8],
        ["H",-0.7,1,0],
        ["H",-0.7,-1,0],
        ["H",0.7,1,0],
        ["H",0.7,-1,0],
        ["H",2.5,0.9,0],
        ["H",2.5,-0.45,0.8],
        ["H",2.5,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],[1,2,1],[2,3,1],
        [0,4,1],[0,5,1],[0,6,1],
        [1,7,1],[1,8,1],
        [2,9,1],[2,10,1],
        [3,11,1],[3,12,1],[3,13,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Methanethiol",
    formula:"CH3SH",
    category:"Organic",
    atoms:[
        ["C",-0.8,0,0],
        ["S",0.6,0,0],
        ["H",-1.2,0.9,0],
        ["H",-1.2,-0.45,0.8],
        ["H",-1.2,-0.45,-0.8],
        ["H",1.2,0.7,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],[0,3,1],[0,4,1],
        [1,5,1]
    ],
    shape:"Tetrahedral / Bent",
    domains:4,
    hybridization:"sp3",
    angle:"109.5° / ~96°",
    polarity:"Polar"
},

{
    name:"Dimethyl sulfide",
    formula:"(CH3)2S",
    category:"Organic",
    atoms:[
        ["S",0,0,0],
        ["C",-1.3,0.7,0],
        ["C",1.3,0.7,0],
        ["H",-1.8,1.4,0],
        ["H",-1.8,0,0.8],
        ["H",-1.8,0,-0.8],
        ["H",1.8,1.4,0],
        ["H",1.8,0,0.8],
        ["H",1.8,0,-0.8]
    ],
    bonds:[
        [0,1,1],[0,2,1],
        [1,3,1],[1,4,1],[1,5,1],
        [2,6,1],[2,7,1],[2,8,1]
    ],
    shape:"Bent around S",
    domains:4,
    hybridization:"sp3",
    angle:"~99°",
    polarity:"Polar"
},

{
    name:"Nitromethane",
    formula:"CH3NO2",
    category:"Organic",
    atoms:[
        ["C",-1.2,0,0],
        ["N",0,0,0],
        ["O",1.1,0.8,0],
        ["O",1.1,-0.8,0],
        ["H",-1.7,0.9,0],
        ["H",-1.7,-0.45,0.8],
        ["H",-1.7,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],
        [1,2,2],
        [1,3,1],
        [0,4,1],[0,5,1],[0,6,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

{
    name:"Dimethylformamide",
    formula:"C3H7NO",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["N",-0.8,0.9,0],
        ["C",-1.4,-0.5,0],
        ["C",-1.7,1.8,0],
        ["H",-2.1,-1,0],
        ["H",-1.8,0,0.8],
        ["H",-1.8,0,-0.8]
    ],
    bonds:[
        [0,1,2],[0,2,1],[0,3,1],
        [2,4,1],
        [3,5,1],[3,6,1],[3,7,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Ethylene glycol",
    formula:"C2H6O2",
    category:"Organic",
    atoms:[
        ["C",-0.8,0,0],
        ["C",0.8,0,0],
        ["O",-1.5,0.9,0],
        ["O",1.5,0.9,0],
        ["H",-1.1,-0.9,0],
        ["H",-0.9,0,0.9],
        ["H",1.1,-0.9,0],
        ["H",0.9,0,0.9],
        ["H",-2,1.4,0],
        ["H",2,1.4,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],[0,4,1],[0,5,1],
        [1,3,1],[1,6,1],[1,7,1],
        [2,8,1],[3,9,1]
    ],
    shape:"Tetrahedral / Bent",
    domains:4,
    hybridization:"sp3",
    angle:"109.5° / ~104.5°",
    polarity:"Polar"
},

/* ===================== 131–140: COMMON ORGANIC FUNCTIONAL GROUPS ===================== */

{
    name:"Dimethyl carbonate",
    formula:"C3H6O3",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.7,0.9,0],
        ["O",-0.7,-0.9,0],
        ["C",-1.8,1.5,0],
        ["C",-1.8,-1.5,0]
    ],
    bonds:[
        [0,1,2],[0,2,1],[0,3,1],
        [2,4,1],[3,5,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Methyl acetate",
    formula:"C3H6O2",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.7,0.9,0],
        ["C",-0.7,-1.2,0],
        ["C",-1.8,1.5,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [2,4,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

{
    name:"Ethyl acetate",
    formula:"C4H8O2",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.7,0.9,0],
        ["C",-0.7,-1.2,0],
        ["C",-1.8,1.5,0],
        ["C",-2.8,1.5,0]
    ],
    bonds:[
        [0,1,2],[0,2,1],[0,3,1],
        [2,4,1],[4,5,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

{
    name:"Acetaldehyde oxime",
    formula:"C2H5NO",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["N",1.2,0,0],
        ["O",2.1,0.8,0],
        ["C",-1.2,0,0],
        ["H",-1.7,0.9,0],
        ["H",-1.7,-0.45,0.8],
        ["H",-1.7,-0.45,-0.8]
    ],
    bonds:[
        [0,1,2],
        [1,2,1],
        [0,3,1],
        [3,4,1],[3,5,1],[3,6,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Acetanilide",
    formula:"C8H9NO",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["N",-0.8,0.9,0],
        ["C",-1.4,-0.5,0]
    ],
    bonds:[
        [0,1,2],[0,2,1],[0,3,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Aniline",
    formula:"C6H7N",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.21,0],
        ["C",-0.7,1.21,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.21,0],
        ["C",0.7,-1.21,0],
        ["N",2.3,0,0]
    ],
    bonds:[
        [0,1,2],[1,2,1],[2,3,2],
        [3,4,1],[4,5,2],[5,0,1],
        [0,6,1]
    ],
    shape:"Planar ring / Pyramidal at N",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"120° / ~107°",
    polarity:"Polar"
},

{
    name:"Toluene",
    formula:"C7H8",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.21,0],
        ["C",-0.7,1.21,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.21,0],
        ["C",0.7,-1.21,0],
        ["C",2.5,0,0]
    ],
    bonds:[
        [0,1,2],[1,2,1],[2,3,2],
        [3,4,1],[4,5,2],[5,0,1],
        [0,6,1]
    ],
    shape:"Planar aromatic ring / Tetrahedral methyl",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"120° / 109.5°",
    polarity:"Nonpolar"
},

{
    name:"Styrene",
    formula:"C8H8",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.21,0],
        ["C",-0.7,1.21,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.21,0],
        ["C",0.7,-1.21,0],
        ["C",2.5,0,0],
        ["C",3.6,0,0]
    ],
    bonds:[
        [0,1,2],[1,2,1],[2,3,2],
        [3,4,1],[4,5,2],[5,0,1],
        [0,6,1],[6,7,2]
    ],
    shape:"Planar aromatic / Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Nonpolar"
},

{
    name:"Cyclohexane",
    formula:"C6H12",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.2,0],
        ["C",-0.7,1.2,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.2,0],
        ["C",0.7,-1.2,0]
    ],
    bonds:[
        [0,1,1],[1,2,1],[2,3,1],
        [3,4,1],[4,5,1],[5,0,1]
    ],
    shape:"Chair / Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"~109.5°",
    polarity:"Nonpolar"
},

{
    name:"Cyclohexene",
    formula:"C6H10",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.2,0],
        ["C",-0.7,1.2,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.2,0],
        ["C",0.7,-1.2,0]
    ],
    bonds:[
        [0,1,2],[1,2,1],[2,3,1],
        [3,4,1],[4,5,1],[5,0,1]
    ],
    shape:"Nonplanar ring",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Nonpolar"
},

/* ===================== 141–150: IMPORTANT BIO/GENERAL CHEMISTRY ===================== */

{
    name:"Glucose",
    formula:"C6H12O6",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["C",1.3,0,0],
        ["C",2.6,0,0],
        ["C",3.9,0,0],
        ["C",5.2,0,0],
        ["C",6.5,0,0],
        ["O",7.5,0.8,0]
    ],
    bonds:[
        [0,1,1],[1,2,1],[2,3,1],
        [3,4,1],[4,5,1],[5,6,1]
    ],
    shape:"Tetrahedral carbon centers",
    domains:4,
    hybridization:"sp3",
    angle:"~109.5°",
    polarity:"Polar"
},

{
    name:"Fructose",
    formula:"C6H12O6",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["C",1.3,0,0],
        ["C",2.6,0,0],
        ["C",3.9,0,0],
        ["C",5.2,0,0],
        ["C",6.5,0,0],
        ["O",2.6,1.2,0]
    ],
    bonds:[
        [0,1,1],[1,2,1],[2,3,1],
        [3,4,1],[4,5,1],[2,6,2]
    ],
    shape:"Tetrahedral / Trigonal planar",
    domains:4,
    hybridization:"sp3 / sp2",
    angle:"109.5° / 120°",
    polarity:"Polar"
},

{
    name:"Glycine",
    formula:"C2H5NO2",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["N",-1.2,0,0],
        ["C",1.2,0,0],
        ["O",2.2,0.8,0],
        ["O",2.2,-0.8,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [2,3,2],
        [2,4,1]
    ],
    shape:"Tetrahedral / Trigonal planar",
    domains:4,
    hybridization:"sp3 / sp2",
    angle:"109.5° / 120°",
    polarity:"Polar"
},

{
    name:"Carbonic acid",
    formula:"H2CO3",
    category:"Acids",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.6,1.04,0],
        ["O",-0.6,-1.04,0],
        ["H",-1.1,1.5,0],
        ["H",-1.1,-1.5,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [2,4,1],
        [3,5,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Polar"
},

{
    name:"Hydrogen carbonate",
    formula:"HCO3-",
    category:"Ions",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.6,1.04,0],
        ["O",-0.6,-1.04,0],
        ["H",-1.1,-1.5,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [3,4,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Polar"
},

{
    name:"Hydrogen sulfate",
    formula:"HSO4-",
    category:"Ions",
    atoms:[
        ["S",0,0,0],
        ["O",1.2,0,0],
        ["O",-1.2,0,0],
        ["O",0,1.2,0],
        ["O",0,-1.2,0],
        ["H",0,-1.8,0.5]
    ],
    bonds:[
        [0,1,2],
        [0,2,2],
        [0,3,1],
        [0,4,1],
        [4,5,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Polar"
},

{
    name:"Hydrogen phosphate",
    formula:"HPO4-2",
    category:"Ions",
    atoms:[
        ["P",0,0,0],
        ["O",1,1,1],
        ["O",-1,-1,1],
        ["O",-1,1,-1],
        ["O",1,-1,-1],
        ["H",1.5,-1.5,-1.5]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [4,5,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Polar"
},

{
    name:"Dihydrogen phosphate",
    formula:"H2PO4-",
    category:"Ions",
    atoms:[
        ["P",0,0,0],
        ["O",1,1,1],
        ["O",-1,-1,1],
        ["O",-1,1,-1],
        ["O",1,-1,-1],
        ["H",-1.5,1.5,-1.5],
        ["H",1.5,-1.5,-1.5]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [3,5,1],
        [4,6,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Polar"
},

{
    name:"Hydrogen sulfide ion",
    formula:"HS-",
    category:"Ions",
    atoms:[
        ["S",-0.7,0,0],
        ["H",0.7,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Peroxide ion",
    formula:"O2-2",
    category:"Ions",
    atoms:[
        ["O",-0.7,0,0],
        ["O",0.7,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Nonpolar"
}

{
    name:"Peroxide ion",
    formula:"O2-2",
    category:"Ions",
    atoms:[
        ["O",-0.7,0,0],
        ["O",0.7,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Nonpolar"
}

{
    name:"Hydrogen",
    formula:"H2",
    category:"Gases",
    atoms:[
        ["H",-0.6,0,0],["H",0.6,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Fluorine",
    formula:"F2",
    category:"Gases",
    atoms:[
        ["F",-0.7,0,0],["F",0.7,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Chlorine",
    formula:"Cl2",
    category:"Gases",
    atoms:[
        ["Cl",-0.9,0,0],["Cl",0.9,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Bromine",
    formula:"Br2",
    category:"Gases",
    atoms:[
        ["Br",-1,0,0],["Br",1,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Iodine",
    formula:"I2",
    category:"Inorganic",
    atoms:[
        ["I",-1.1,0,0],["I",1.1,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Nitrogen",
    formula:"N2",
    category:"Gases",
    atoms:[
        ["N",-0.65,0,0],["N",0.65,0,0]
    ],
    bonds:[[0,1,3]],
    shape:"Linear",
    domains:1,
    hybridization:"sp",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Oxygen",
    formula:"O2",
    category:"Gases",
    atoms:[
        ["O",-0.6,0,0],["O",0.6,0,0]
    ],
    bonds:[[0,1,2]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Hydrogen fluoride",
    formula:"HF",
    category:"Acids",
    atoms:[
        ["H",-0.75,0,0],["F",0.75,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Hydrogen chloride",
    formula:"HCl",
    category:"Acids",
    atoms:[
        ["H",-0.75,0,0],["Cl",0.75,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Hydrogen bromide",
    formula:"HBr",
    category:"Acids",
    atoms:[
        ["H",-0.75,0,0],["Br",0.75,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Hydrogen iodide",
    formula:"HI",
    category:"Acids",
    atoms:[
        ["H",-0.8,0,0],["I",0.8,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Carbon monoxide",
    formula:"CO",
    category:"Gases",
    atoms:[
        ["C",-0.65,0,0],["O",0.65,0,0]
    ],
    bonds:[[0,1,3]],
    shape:"Linear",
    domains:1,
    hybridization:"sp",
    angle:"180°",
    polarity:"Polar"
},

/* ===================== CARBON & CENTRAL ATOM MOLECULES ===================== */

{
    name:"Carbon dioxide",
    formula:"CO2",
    category:"Gases",
    atoms:[
        ["O",-1.25,0,0],
        ["C",0,0,0],
        ["O",1.25,0,0]
    ],
    bonds:[
        [0,1,2],
        [1,2,2]
    ],
    shape:"Linear",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Carbon disulfide",
    formula:"CS2",
    category:"Gases",
    atoms:[
        ["S",-1.3,0,0],
        ["C",0,0,0],
        ["S",1.3,0,0]
    ],
    bonds:[
        [0,1,2],
        [1,2,2]
    ],
    shape:"Linear",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Sulfur dioxide",
    formula:"SO2",
    category:"Gases",
    atoms:[
        ["S",0,0,0],
        ["O",-1.05,0.75,0],
        ["O",1.05,0.75,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,2]
    ],
    shape:"Bent",
    domains:3,
    hybridization:"sp2",
    angle:"~119°",
    polarity:"Polar"
},

{
    name:"Sulfur trioxide",
    formula:"SO3",
    category:"Gases",
    atoms:[
        ["S",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.6,1.04,0],
        ["O",-0.6,-1.04,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,2],
        [0,3,2]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Nonpolar"
},

{
    name:"Boron trifluoride",
    formula:"BF3",
    category:"Inorganic",
    atoms:[
        ["B",0,0,0],
        ["F",1.2,0,0],
        ["F",-0.6,1.04,0],
        ["F",-0.6,-1.04,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Nonpolar"
},

{
    name:"Boron trichloride",
    formula:"BCl3",
    category:"Inorganic",
    atoms:[
        ["B",0,0,0],
        ["Cl",1.3,0,0],
        ["Cl",-0.65,1.13,0],
        ["Cl",-0.65,-1.13,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Nonpolar"
},

{
    name:"Beryllium chloride",
    formula:"BeCl2",
    category:"Inorganic",
    atoms:[
        ["Cl",-1.25,0,0],
        ["Be",0,0,0],
        ["Cl",1.25,0,0]
    ],
    bonds:[
        [0,1,1],
        [1,2,1]
    ],
    shape:"Linear",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Methane",
    formula:"CH4",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["H",0.9,0.9,0.9],
        ["H",-0.9,-0.9,0.9],
        ["H",-0.9,0.9,-0.9],
        ["H",0.9,-0.9,-0.9]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Carbon tetrachloride",
    formula:"CCl4",
    category:"Inorganic",
    atoms:[
        ["C",0,0,0],
        ["Cl",1,1,1],
        ["Cl",-1,-1,1],
        ["Cl",-1,1,-1],
        ["Cl",1,-1,-1]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Silane",
    formula:"SiH4",
    category:"Gases",
    atoms:[
        ["Si",0,0,0],
        ["H",1,1,1],
        ["H",-1,-1,1],
        ["H",-1,1,-1],
        ["H",1,-1,-1]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

/* ===================== NITROGEN / PHOSPHORUS ===================== */

{
    name:"Ammonia",
    formula:"NH3",
    category:"Bases",
    atoms:[
        ["N",0,0,0],
        ["H",1,0.7,0],
        ["H",-1,0.7,0],
        ["H",0,-0.9,0.7]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"107°",
    polarity:"Polar"
},

{
    name:"Ammonium ion",
    formula:"NH4+",
    category:"Ions",
    atoms:[
        ["N",0,0,0],
        ["H",1,1,1],
        ["H",-1,-1,1],
        ["H",-1,1,-1],
        ["H",1,-1,-1]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Phosphine",
    formula:"PH3",
    category:"Gases",
    atoms:[
        ["P",0,0,0],
        ["H",1,0.5,0],
        ["H",-1,0.5,0],
        ["H",0,-0.8,0.7]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"~93.5°",
    polarity:"Polar"
},

{
    name:"Phosphorus trichloride",
    formula:"PCl3",
    category:"Inorganic",
    atoms:[
        ["P",0,0,0],
        ["Cl",1,0.5,0],
        ["Cl",-1,0.5,0],
        ["Cl",0,-0.8,0.7]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"~100°",
    polarity:"Polar"
},

{
    name:"Phosphorus pentachloride",
    formula:"PCl5",
    category:"Inorganic",
    atoms:[
        ["P",0,0,0],
        ["Cl",1.3,0,0],
        ["Cl",-1.3,0,0],
        ["Cl",0,1.3,0],
        ["Cl",0,-0.65,1.13],
        ["Cl",0,-0.65,-1.13]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [0,5,1]
    ],
    shape:"Trigonal bipyramidal",
    domains:5,
    hybridization:"sp3d",
    angle:"90° / 120° / 180°",
    polarity:"Nonpolar"
},

{
    name:"Phosphorus pentafluoride",
    formula:"PF5",
    category:"Gases",
    atoms:[
        ["P",0,0,0],
        ["F",1.3,0,0],
        ["F",-1.3,0,0],
        ["F",0,1.3,0],
        ["F",0,-0.65,1.13],
        ["F",0,-0.65,-1.13]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [0,5,1]
    ],
    shape:"Trigonal bipyramidal",
    domains:5,
    hybridization:"sp3d",
    angle:"90° / 120° / 180°",
    polarity:"Nonpolar"
},

{
    name:"Nitrogen trifluoride",
    formula:"NF3",
    category:"Gases",
    atoms:[
        ["N",0,0,0],
        ["F",1,0.5,0],
        ["F",-1,0.5,0],
        ["F",0,-0.8,0.7]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"102°",
    polarity:"Polar"
},

{
    name:"Nitrogen trichloride",
    formula:"NCl3",
    category:"Inorganic",
    atoms:[
        ["N",0,0,0],
        ["Cl",1,0.5,0],
        ["Cl",-1,0.5,0],
        ["Cl",0,-0.8,0.7]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"~109°",
    polarity:"Polar"
},

/* ===================== SULFUR / HALOGENS / XENON ===================== */

{
    name:"Sulfur tetrafluoride",
    formula:"SF4",
    category:"Gases",
    atoms:[
        ["S",0,0,0],
        ["F",1.3,0,0],
        ["F",-1.3,0,0],
        ["F",0,1.1,0.7],
        ["F",0,-1.1,0.7]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Seesaw",
    domains:5,
    hybridization:"sp3d",
    angle:"~90° / 120°",
    polarity:"Polar"
},

{
    name:"Sulfur hexafluoride",
    formula:"SF6",
    category:"Gases",
    atoms:[
        ["S",0,0,0],
        ["F",1.3,0,0],
        ["F",-1.3,0,0],
        ["F",0,1.3,0],
        ["F",0,-1.3,0],
        ["F",0,0,1.3],
        ["F",0,0,-1.3]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [0,5,1],
        [0,6,1]
    ],
    shape:"Octahedral",
    domains:6,
    hybridization:"sp3d2",
    angle:"90° / 180°",
    polarity:"Nonpolar"
},

{
    name:"Chlorine trifluoride",
    formula:"ClF3",
    category:"Inorganic",
    atoms:[
        ["Cl",0,0,0],
        ["F",1.3,0,0],
        ["F",-1.3,0,0],
        ["F",0,1.3,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1]
    ],
    shape:"T-shaped",
    domains:5,
    hybridization:"sp3d",
    angle:"~90° / 180°",
    polarity:"Polar"
},

{
    name:"Bromine trifluoride",
    formula:"BrF3",
    category:"Inorganic",
    atoms:[
        ["Br",0,0,0],
        ["F",1.4,0,0],
        ["F",-1.4,0,0],
        ["F",0,1.4,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1]
    ],
    shape:"T-shaped",
    domains:5,
    hybridization:"sp3d",
    angle:"~90° / 180°",
    polarity:"Polar"
},

{
    name:"Iodine pentafluoride",
    formula:"IF5",
    category:"Inorganic",
    atoms:[
        ["I",0,0,0],
        ["F",1.3,0,0],
        ["F",-1.3,0,0],
        ["F",0,1.3,0],
        ["F",0,-1.3,0],
        ["F",0,0,1.3]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [0,5,1]
    ],
    shape:"Square pyramidal",
    domains:6,
    hybridization:"sp3d2",
    angle:"~90°",
    polarity:"Polar"
},

{
    name:"Iodine heptafluoride",
    formula:"IF7",
    category:"Inorganic",
    atoms:[
        ["I",0,0,0],
        ["F",1.2,0,0],
        ["F",-1.2,0,0],
        ["F",0,1.2,0],
        ["F",0,-1.2,0],
        ["F",0,0,1.2],
        ["F",0,0,-1.2],
        ["F",0.85,0.85,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [0,5,1],
        [0,6,1],
        [0,7,1]
    ],
    shape:"Pentagonal bipyramidal",
    domains:7,
    hybridization:"sp3d3",
    angle:"72° / 90° / 180°",
    polarity:"Nonpolar"
},

{
    name:"Xenon difluoride",
    formula:"XeF2",
    category:"Gases",
    atoms:[
        ["F",-1.5,0,0],
        ["Xe",0,0,0],
        ["F",1.5,0,0]
    ],
    bonds:[
        [0,1,1],
        [1,2,1]
    ],
    shape:"Linear",
    domains:5,
    hybridization:"sp3d",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Xenon tetrafluoride",
    formula:"XeF4",
    category:"Gases",
    atoms:[
        ["Xe",0,0,0],
        ["F",1.3,0,0],
        ["F",-1.3,0,0],
        ["F",0,1.3,0],
        ["F",0,-1.3,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Square planar",
    domains:6,
    hybridization:"sp3d2",
    angle:"90° / 180°",
    polarity:"Nonpolar"
},

{
    name:"Xenon hexafluoride",
    formula:"XeF6",
    category:"Gases",
    atoms:[
        ["Xe",0,0,0],
        ["F",1.2,0,0],
        ["F",-1.2,0,0],
        ["F",0,1.2,0],
        ["F",0,-1.2,0],
        ["F",0,0,1.2],
        ["F",0.8,0.8,0.8]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [0,5,1],
        [0,6,1]
    ],
    shape:"Distorted octahedral",
    domains:7,
    hybridization:"sp3d3",
    angle:"~90°",
    polarity:"Polar"
},

/* ===================== WATER / OXYGEN ===================== */

{
    name:"Water",
    formula:"H2O",
    category:"Inorganic",
    atoms:[
        ["O",0,0,0],
        ["H",-0.75,0.6,0],
        ["H",0.75,0.6,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1]
    ],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"104.5°",
    polarity:"Polar"
},

{
    name:"Hydrogen sulfide",
    formula:"H2S",
    category:"Gases",
    atoms:[
        ["S",0,0,0],
        ["H",-0.9,0.55,0],
        ["H",0.9,0.55,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1]
    ],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~92°",
    polarity:"Polar"
},

{
    name:"Hydrogen peroxide",
    formula:"H2O2",
    category:"Inorganic",
    atoms:[
        ["O",-0.65,0,0],
        ["O",0.65,0.2,0],
        ["H",-1.2,0.55,0.4],
        ["H",1.2,0.75,-0.4]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [1,3,1]
    ],
    shape:"Nonlinear",
    domains:4,
    hybridization:"sp3",
    angle:"~94°",
    polarity:"Polar"
},

{
    name:"Ozone",
    formula:"O3",
    category:"Gases",
    atoms:[
        ["O",0,0,0],
        ["O",-1.1,0.7,0],
        ["O",1.1,0.7,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1]
    ],
    shape:"Bent",
    domains:3,
    hybridization:"sp2",
    angle:"~117°",
    polarity:"Polar"
},

/* ===================== NITROGEN OXIDES ===================== */

{
    name:"Nitric oxide",
    formula:"NO",
    category:"Gases",
    atoms:[
        ["N",-0.65,0,0],
        ["O",0.65,0,0]
    ],
    bonds:[[0,1,2]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Nitrogen dioxide",
    formula:"NO2",
    category:"Gases",
    atoms:[
        ["N",0,0,0],
        ["O",-1.05,0.75,0],
        ["O",1.05,0.75,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1]
    ],
    shape:"Bent",
    domains:3,
    hybridization:"sp2",
    angle:"~134°",
    polarity:"Polar"
},

{
    name:"Nitrite ion",
    formula:"NO2-",
    category:"Ions",
    atoms:[
        ["N",0,0,0],
        ["O",-1.05,0.75,0],
        ["O",1.05,0.75,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1]
    ],
    shape:"Bent",
    domains:3,
    hybridization:"sp2",
    angle:"~115°",
    polarity:"Polar"
},

{
    name:"Nitrate ion",
    formula:"NO3-",
    category:"Ions",
    atoms:[
        ["N",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.6,1.04,0],
        ["O",-0.6,-1.04,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Nonpolar"
},

{
    name:"Nitrous oxide",
    formula:"N2O",
    category:"Gases",
    atoms:[
        ["N",-1.2,0,0],
        ["N",0,0,0],
        ["O",1.2,0,0]
    ],
    bonds:[
        [0,1,2],
        [1,2,2]
    ],
    shape:"Linear",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Polar"
},

/* ===================== COMMON ACIDS ===================== */

{
    name:"Nitric acid",
    formula:"HNO3",
    category:"Acids",
    atoms:[
        ["N",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.6,1.04,0],
        ["O",-0.6,-1.04,0],
        ["H",-1.1,-1.5,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [3,4,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Nitrous acid",
    formula:"HNO2",
    category:"Acids",
    atoms:[
        ["N",0,0,0],
        ["O",1.1,0.7,0],
        ["O",-1.1,0.7,0],
        ["H",-1.6,1.2,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [2,3,1]
    ],
    shape:"Bent",
    domains:3,
    hybridization:"sp2",
    angle:"~115°",
    polarity:"Polar"
},

{
    name:"Sulfuric acid",
    formula:"H2SO4",
    category:"Acids",
    atoms:[
        ["S",0,0,0],
        ["O",1.2,0,0],
        ["O",-1.2,0,0],
        ["O",0,1.2,0],
        ["O",0,-1.2,0],
        ["H",0,1.8,0.5],
        ["H",0,-1.8,0.5]
    ],
    bonds:[
        [0,1,2],
        [0,2,2],
        [0,3,1],
        [0,4,1],
        [3,5,1],
        [4,6,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"~109.5°",
    polarity:"Polar"
},

{
    name:"Sulfurous acid",
    formula:"H2SO3",
    category:"Acids",
    atoms:[
        ["S",0,0,0],
        ["O",1.1,0.5,0],
        ["O",-1.1,0.5,0],
        ["O",0,-1.1,0],
        ["H",-1.6,1,0],
        ["H",0,-1.7,0.5]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [2,4,1],
        [3,5,1]
    ],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"~109°",
    polarity:"Polar"
},

{
    name:"Carbonic acid",
    formula:"H2CO3",
    category:"Acids",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.6,1.04,0],
        ["O",-0.6,-1.04,0],
        ["H",-1.1,1.5,0],
        ["H",-1.1,-1.5,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [2,4,1],
        [3,5,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Polar"
},

{
    name:"Phosphoric acid",
    formula:"H3PO4",
    category:"Acids",
    atoms:[
        ["P",0,0,0],
        ["O",1.2,0,0],
        ["O",-1.2,0,0],
        ["O",0,1.2,0],
        ["O",0,-1.2,0],
        ["H",-1.7,0.5,0],
        ["H",0,1.7,0.5],
        ["H",0,-1.7,0.5]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [2,5,1],
        [3,6,1],
        [4,7,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Polar"
},

/* ===================== COMMON IONS ===================== */

{
    name:"Hydroxide ion",
    formula:"OH-",
    category:"Ions",
    atoms:[
        ["O",-0.65,0,0],
        ["H",0.65,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Cyanide ion",
    formula:"CN-",
    category:"Ions",
    atoms:[
        ["C",-0.65,0,0],
        ["N",0.65,0,0]
    ],
    bonds:[[0,1,3]],
    shape:"Linear",
    domains:1,
    hybridization:"sp",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Amide ion",
    formula:"NH2-",
    category:"Ions",
    atoms:[
        ["N",0,0,0],
        ["H",-0.8,0.6,0],
        ["H",0.8,0.6,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1]
    ],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~104°",
    polarity:"Polar"
},

{
    name:"Sulfate ion",
    formula:"SO4-2",
    category:"Ions",
    atoms:[
        ["S",0,0,0],
        ["O",1,1,1],
        ["O",-1,-1,1],
        ["O",-1,1,-1],
        ["O",1,-1,-1]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Sulfite ion",
    formula:"SO3-2",
    category:"Ions",
    atoms:[
        ["S",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.6,1.04,0],
        ["O",-0.6,-1.04,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"~109°",
    polarity:"Polar"
},

{
    name:"Carbonate ion",
    formula:"CO3-2",
    category:"Ions",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.6,1.04,0],
        ["O",-0.6,-1.04,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Nonpolar"
},

{
    name:"Bicarbonate ion",
    formula:"HCO3-",
    category:"Ions",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.6,1.04,0],
        ["O",-0.6,-1.04,0],
        ["H",-1.1,-1.5,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [3,4,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Polar"
},

{
    name:"Phosphate ion",
    formula:"PO4-3",
    category:"Ions",
    atoms:[
        ["P",0,0,0],
        ["O",1,1,1],
        ["O",-1,-1,1],
        ["O",-1,1,-1],
        ["O",1,-1,-1]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Perchlorate ion",
    formula:"ClO4-",
    category:"Ions",
    atoms:[
        ["Cl",0,0,0],
        ["O",1,1,1],
        ["O",-1,-1,1],
        ["O",-1,1,-1],
        ["O",1,-1,-1]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Tetrafluoroborate ion",
    formula:"BF4-",
    category:"Ions",
    atoms:[
        ["B",0,0,0],
        ["F",1,1,1],
        ["F",-1,-1,1],
        ["F",-1,1,-1],
        ["F",1,-1,-1]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Hexafluorophosphate ion",
    formula:"PF6-",
    category:"Ions",
    atoms:[
        ["P",0,0,0],
        ["F",1.3,0,0],
        ["F",-1.3,0,0],
        ["F",0,1.3,0],
        ["F",0,-1.3,0],
        ["F",0,0,1.3],
        ["F",0,0,-1.3]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [0,5,1],
        [0,6,1]
    ],
    shape:"Octahedral",
    domains:6,
    hybridization:"sp3d2",
    angle:"90° / 180°",
    polarity:"Nonpolar"
},

/* ===================== HALOGEN OXYANIONS ===================== */

{
    name:"Hypochlorite ion",
    formula:"ClO-",
    category:"Ions",
    atoms:[
        ["Cl",-0.8,0,0],
        ["O",0.8,0,0]
    ],
    bonds:[[0,1,1]],
    shape:"Linear",
    domains:1,
    hybridization:"—",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Chlorite ion",
    formula:"ClO2-",
    category:"Ions",
    atoms:[
        ["Cl",0,0,0],
        ["O",-1,0.7,0],
        ["O",1,0.7,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1]
    ],
    shape:"Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~109°",
    polarity:"Polar"
},

{
    name:"Chlorate ion",
    formula:"ClO3-",
    category:"Ions",
    atoms:[
        ["Cl",0,0,0],
        ["O",1.1,0,0],
        ["O",-0.55,0.95,0],
        ["O",-0.55,-0.95,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"~109°",
    polarity:"Polar"
},

/* ===================== SIMPLE ORGANIC COMPOUNDS ===================== */

{
    name:"Chloromethane",
    formula:"CH3Cl",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["Cl",1.5,0,0],
        ["H",-0.5,0.9,0],
        ["H",-0.5,-0.45,0.8],
        ["H",-0.5,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Polar"
},

{
    name:"Dichloromethane",
    formula:"CH2Cl2",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["Cl",1,0,0],
        ["Cl",-1,0,0],
        ["H",0,1,1],
        ["H",0,-1,-1]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Polar"
},

{
    name:"Chloroform",
    formula:"CHCl3",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["Cl",1,1,1],
        ["Cl",-1,-1,1],
        ["Cl",-1,1,-1],
        ["H",1,-1,-1]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [0,4,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Polar"
},

{
    name:"Ethane",
    formula:"C2H6",
    category:"Organic",
    atoms:[
        ["C",-0.75,0,0],
        ["C",0.75,0,0],
        ["H",-1.2,0.9,0],
        ["H",-1.2,-0.45,0.8],
        ["H",-1.2,-0.45,-0.8],
        ["H",1.2,0.9,0],
        ["H",1.2,-0.45,0.8],
        ["H",1.2,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],[0,3,1],[0,4,1],
        [1,5,1],[1,6,1],[1,7,1]
    ],
    shape:"Tetrahedral",
    domains:4,
    hybridization:"sp3",
    angle:"109.5°",
    polarity:"Nonpolar"
},

{
    name:"Ethene",
    formula:"C2H4",
    category:"Organic",
    atoms:[
        ["C",-0.67,0,0],
        ["C",0.67,0,0],
        ["H",-0.67,1.05,0],
        ["H",-0.67,-1.05,0],
        ["H",0.67,1.05,0],
        ["H",0.67,-1.05,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],[0,3,1],
        [1,4,1],[1,5,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Nonpolar"
},

{
    name:"Ethyne",
    formula:"C2H2",
    category:"Organic",
    atoms:[
        ["H",-1.5,0,0],
        ["C",-0.75,0,0],
        ["C",0.75,0,0],
        ["H",1.5,0,0]
    ],
    bonds:[
        [0,1,1],
        [1,2,3],
        [2,3,1]
    ],
    shape:"Linear",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Nonpolar"
},

{
    name:"Methanol",
    formula:"CH3OH",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.35,0,0],
        ["H",-0.5,0.9,0],
        ["H",-0.5,-0.45,0.8],
        ["H",-0.5,-0.45,-0.8],
        ["H",1.8,0.6,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],[0,3,1],[0,4,1],
        [1,5,1]
    ],
    shape:"Tetrahedral / Bent",
    domains:4,
    hybridization:"sp3",
    angle:"109.5° / ~104.5°",
    polarity:"Polar"
},

{
    name:"Ethanol",
    formula:"C2H5OH",
    category:"Organic",
    atoms:[
        ["C",-0.75,0,0],
        ["C",0.75,0,0],
        ["O",1.8,0.7,0],
        ["H",-1.2,0.9,0],
        ["H",-1.2,-0.45,0.8],
        ["H",-1.2,-0.45,-0.8],
        ["H",1.2,-0.9,0],
        ["H",2.3,1.2,0]
    ],
    bonds:[
        [0,1,1],
        [0,3,1],[0,4,1],[0,5,1],
        [1,2,1],
        [1,6,1],
        [2,7,1]
    ],
    shape:"Tetrahedral / Bent",
    domains:4,
    hybridization:"sp3",
    angle:"109.5° / ~104.5°",
    polarity:"Polar"
},

{
    name:"Dimethyl ether",
    formula:"CH3OCH3",
    category:"Organic",
    atoms:[
        ["C",-1.1,0,0],
        ["O",0,0,0],
        ["C",1.1,0,0],
        ["H",-1.5,0.9,0],
        ["H",-1.5,-0.45,0.8],
        ["H",-1.5,-0.45,-0.8],
        ["H",1.5,0.9,0],
        ["H",1.5,-0.45,0.8],
        ["H",1.5,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],
        [1,2,1],
        [0,3,1],[0,4,1],[0,5,1],
        [2,6,1],[2,7,1],[2,8,1]
    ],
    shape:"Tetrahedral / Bent",
    domains:4,
    hybridization:"sp3",
    angle:"109.5° / ~104.5°",
    polarity:"Polar"
},

/* ===================== CARBONYL COMPOUNDS ===================== */

{
    name:"Formaldehyde",
    formula:"CH2O",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["H",-0.6,1.0,0],
        ["H",-0.6,-1.0,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Acetaldehyde",
    formula:"CH3CHO",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["C",-1.3,0,0],
        ["H",0.5,1,0],
        ["H",0.5,-1,0],
        ["H",-2,0.9,0],
        ["H",-2,-0.45,0.8],
        ["H",-2,-0.45,-0.8]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [0,4,1],
        [2,5,1],
        [2,6,1],
        [2,7,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

{
    name:"Acetone",
    formula:"CH3COCH3",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["C",-1.3,0,0],
        ["C",0,-1.3,0],
        ["H",-2,0.9,0],
        ["H",-2,-0.45,0.8],
        ["H",-2,-0.45,-0.8],
        ["H",0.5,-2.0,0],
        ["H",-0.5,-2.0,0.8],
        ["H",-0.5,-2.0,-0.8]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [2,4,1],[2,5,1],[2,6,1],
        [3,7,1],[3,8,1],[3,9,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

/* ===================== CARBOXYLIC ACIDS ===================== */

{
    name:"Formic acid",
    formula:"HCOOH",
    category:"Acids",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.7,0.9,0],
        ["H",-0.7,1.7,0],
        ["H",-1.1,-0.9,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [2,3,1],
        [0,4,1]
    ],
    shape:"Trigonal planar / Bent",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120°",
    polarity:"Polar"
},

{
    name:"Acetic acid",
    formula:"CH3COOH",
    category:"Acids",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.7,0.9,0],
        ["C",-1.4,0,0],
        ["H",-0.7,1.7,0],
        ["H",-2.0,0.9,0],
        ["H",-2.0,-0.45,0.8],
        ["H",-2.0,-0.45,-0.8]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [2,4,1],
        [3,5,1],
        [3,6,1],
        [3,7,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

{
    name:"Acetate ion",
    formula:"CH3COO-",
    category:"Ions",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["O",-0.7,0.9,0],
        ["C",-1.4,0,0],
        ["H",-2.0,0.9,0],
        ["H",-2.0,-0.45,0.8],
        ["H",-2.0,-0.45,-0.8]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [3,4,1],
        [3,5,1],
        [3,6,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

/* ===================== NITRILES / AMINES ===================== */

{
    name:"Hydrogen cyanide",
    formula:"HCN",
    category:"Gases",
    atoms:[
        ["H",-1.5,0,0],
        ["C",-0.75,0,0],
        ["N",0.75,0,0]
    ],
    bonds:[
        [0,1,1],
        [1,2,3]
    ],
    shape:"Linear",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Acetonitrile",
    formula:"CH3CN",
    category:"Organic",
    atoms:[
        ["C",-1.2,0,0],
        ["C",0,0,0],
        ["N",1.2,0,0],
        ["H",-1.7,0.9,0],
        ["H",-1.7,-0.45,0.8],
        ["H",-1.7,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],
        [1,2,3],
        [0,3,1],
        [0,4,1],
        [0,5,1]
    ],
    shape:"Linear at C≡N",
    domains:2,
    hybridization:"sp",
    angle:"180°",
    polarity:"Polar"
},

{
    name:"Methylamine",
    formula:"CH3NH2",
    category:"Bases",
    atoms:[
        ["C",-0.8,0,0],
        ["N",0.5,0,0],
        ["H",-1.2,0.9,0],
        ["H",-1.2,-0.45,0.8],
        ["H",-1.2,-0.45,-0.8],
        ["H",0.9,0.8,0],
        ["H",0.9,-0.8,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],[0,3,1],[0,4,1],
        [1,5,1],[1,6,1]
    ],
    shape:"Trigonal pyramidal at N",
    domains:4,
    hybridization:"sp3",
    angle:"~107°",
    polarity:"Polar"
},

{
    name:"Dimethylamine",
    formula:"(CH3)2NH",
    category:"Bases",
    atoms:[
        ["N",0,0,0],
        ["C",-1.3,0.6,0],
        ["C",1.3,0.6,0],
        ["H",0,-0.9,0.5],
        ["H",-1.8,1.3,0],
        ["H",-1.8,0,0.8],
        ["H",-1.8,0,-0.8],
        ["H",1.8,1.3,0],
        ["H",1.8,0,0.8],
        ["H",1.8,0,-0.8]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [1,4,1],[1,5,1],[1,6,1],
        [2,7,1],[2,8,1],[2,9,1]
    ],
    shape:"Trigonal pyramidal at N",
    domains:4,
    hybridization:"sp3",
    angle:"~107°",
    polarity:"Polar"
},

{
    name:"Trimethylamine",
    formula:"(CH3)3N",
    category:"Bases",
    atoms:[
        ["N",0,0,0],
        ["C",1.2,0,0],
        ["C",-0.6,1.04,0],
        ["C",-0.6,-1.04,0],
        ["H",1.8,0.9,0],
        ["H",1.8,-0.45,0.8],
        ["H",1.8,-0.45,-0.8]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1]
    ],
    shape:"Trigonal pyramidal",
    domains:4,
    hybridization:"sp3",
    angle:"~107°",
    polarity:"Polar"
},

{
    name:"Hydroxylamine",
    formula:"NH2OH",
    category:"Inorganic",
    atoms:[
        ["N",0,0,0],
        ["O",1.3,0,0],
        ["H",-0.8,0.7,0],
        ["H",-0.8,-0.7,0],
        ["H",1.8,0.6,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],
        [0,3,1],
        [1,4,1]
    ],
    shape:"Pyramidal / Bent",
    domains:4,
    hybridization:"sp3",
    angle:"~107°",
    polarity:"Polar"
},

{
    name:"Hydrazine",
    formula:"N2H4",
    category:"Inorganic",
    atoms:[
        ["N",-0.7,0,0],
        ["N",0.7,0,0],
        ["H",-1.1,0.9,0],
        ["H",-1.1,-0.9,0],
        ["H",1.1,0.9,0],
        ["H",1.1,-0.9,0]
    ],
    bonds:[
        [0,1,1],
        [0,2,1],[0,3,1],
        [1,4,1],[1,5,1]
    ],
    shape:"Trigonal pyramidal at each N",
    domains:4,
    hybridization:"sp3",
    angle:"~107°",
    polarity:"Polar"
},

/* ===================== AMIDES / UREA ===================== */

{
    name:"Acetyl chloride",
    formula:"CH3COCl",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["Cl",-0.8,1,0],
        ["C",-1.3,-0.5,0],
        ["H",-1.8,-1.1,0],
        ["H",-1.8,0.3,0.8],
        ["H",-1.8,0.3,-0.8]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [3,4,1],
        [3,5,1],
        [3,6,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

{
    name:"Acetamide",
    formula:"CH3CONH2",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["N",-0.8,1,0],
        ["C",-1.3,-0.5,0],
        ["H",-1.8,-1.1,0],
        ["H",-1.8,0.3,0.8],
        ["H",-1.8,0.3,-0.8],
        ["H",-1.3,1.8,0],
        ["H",-0.3,1.5,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [3,4,1],[3,5,1],[3,6,1],
        [2,7,1],[2,8,1]
    ],
    shape:"Trigonal planar / Tetrahedral",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"~120° / 109.5°",
    polarity:"Polar"
},

{
    name:"Urea",
    formula:"CH4N2O",
    category:"Organic",
    atoms:[
        ["C",0,0,0],
        ["O",1.2,0,0],
        ["N",-0.7,0.9,0],
        ["N",-0.7,-0.9,0],
        ["H",-1.3,1.5,0],
        ["H",0,1.4,0],
        ["H",-1.3,-1.5,0],
        ["H",0,-1.4,0]
    ],
    bonds:[
        [0,1,2],
        [0,2,1],
        [0,3,1],
        [2,4,1],[2,5,1],
        [3,6,1],[3,7,1]
    ],
    shape:"Trigonal planar",
    domains:3,
    hybridization:"sp2",
    angle:"~120°",
    polarity:"Polar"
},

/* ===================== BENZENE ===================== */

{
    name:"Benzene",
    formula:"C6H6",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.21,0],
        ["C",-0.7,1.21,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.21,0],
        ["C",0.7,-1.21,0],

        ["H",2.45,0,0],
        ["H",1.23,2.13,0],
        ["H",-1.23,2.13,0],
        ["H",-2.45,0,0],
        ["H",-1.23,-2.13,0],
        ["H",1.23,-2.13,0]
    ],
    bonds:[
        [0,1,2],
        [1,2,1],
        [2,3,2],
        [3,4,1],
        [4,5,2],
        [5,0,1],

        [0,6,1],
        [1,7,1],
        [2,8,1],
        [3,9,1],
        [4,10,1],
        [5,11,1]
    ],
    shape:"Planar hexagonal",
    domains:3,
    hybridization:"sp2",
    angle:"120°",
    polarity:"Nonpolar"
},

{
    name:"Phenol",
    formula:"C6H5OH",
    category:"Organic",
    atoms:[
        ["C",1.4,0,0],
        ["C",0.7,1.21,0],
        ["C",-0.7,1.21,0],
        ["C",-1.4,0,0],
        ["C",-0.7,-1.21,0],
        ["C",0.7,-1.21,0],
        ["O",2.3,0,0],
        ["H",2.8,0.7,0]
    ],
    bonds:[
        [0,1,2],[1,2,1],[2,3,2],
        [3,4,1],[4,5,2],[5,0,1],
        [0,6,1],[6,7,1]
    ],
    shape:"Planar ring / Bent at O",
    domains:3,
    hybridization:"sp2 / sp3",
    angle:"120° / ~104.5°",
    polarity:"Polar"
}

]; 
    
    /* ============================================================
       ADDITIONAL REAL MOLECULES
    ============================================================ */
    
   
    
    
    /* ============================================================
       CREATE VISUAL FALLBACK STRUCTURES
    ============================================================ */
    
   
    
    
    /* ============================================================
       THREE.JS VARIABLES
    ============================================================ */
    
    let scene;
    let camera;
    let renderer;
    
    let moleculeGroup;
    
    let labelsVisible = true;
    let bondsVisible = true;
    
    let currentMolecule = null;
    
    let currentCategory = "All";
    
    let mouseDown = false;
    
    let previousMouse = {
        x:0,
        y:0
    };
    
    
    /* ============================================================
       ELEMENT COLORS / RADII
    ============================================================ */
    
    const elementData = {
    
    H:  {color:0xffffff,radius:0.25},
    C:  {color:0x444444,radius:0.38},
    N:  {color:0x2855ff,radius:0.35},
    O:  {color:0xff3030,radius:0.34},
    F:  {color:0x8aff52,radius:0.32},
    Cl: {color:0x35d34a,radius:0.40},
    Br: {color:0x8b321f,radius:0.45},
    I:  {color:0x7b45c7,radius:0.48},
    S:  {color:0xffd928,radius:0.42},
    P:  {color:0xff8b22,radius:0.42},
    B:  {color:0xffaa55,radius:0.34},
    Si: {color:0xaaaaaa,radius:0.40},
    Na: {color:0x9b78ff,radius:0.42},
    K:  {color:0xab77ff,radius:0.48},
    Ca: {color:0x66aaee,radius:0.48},
    Mg: {color:0x66ffcc,radius:0.40},
    Be: {color:0x55ddaa,radius:0.34}
    };
    
    
    /* ============================================================
       INIT THREE.JS
    ============================================================ */
    
    function initViewer() {
    
        const container = document.getElementById("viewer");
    
        scene = new THREE.Scene();
    
        camera = new THREE.PerspectiveCamera(
            45,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        );
    
        camera.position.set(0,0,9);
    
    
        renderer = new THREE.WebGLRenderer({
            antialias:true,
            alpha:true
        });
    
        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio,2)
        );
    
        renderer.setSize(
            container.clientWidth,
            container.clientHeight
        );
    
        container.appendChild(renderer.domElement);
    
    
        /* Lights */
    
        const ambient = new THREE.AmbientLight(
            0xffffff,
            1.2
        );
    
        scene.add(ambient);
    
    
        const light = new THREE.PointLight(
            0xffffff,
            2
        );
    
        light.position.set(5,5,8);
    
        scene.add(light);
    
    
        moleculeGroup = new THREE.Group();
    
        scene.add(moleculeGroup);
    
    
        setupMouseControls();
    
        animate();
    
    }
    
    
    /* ============================================================
       DRAW MOLECULE
    ============================================================ */
    
    function drawMolecule(molecule) {
    
        if (!moleculeGroup) return;
    
        while(moleculeGroup.children.length > 0) {
    
            moleculeGroup.remove(
                moleculeGroup.children[0]
            );
    
        }
    
    
        molecule.atoms.forEach((atom,index) => {
    
            const symbol = atom[0];
    
            const x = atom[1];
            const y = atom[2];
            const z = atom[3];
    
    
            const data =
                elementData[symbol] ||
                {
                    color:0xaaaaaa,
                    radius:0.35
                };
    
    
            const geometry =
                new THREE.SphereGeometry(
                    data.radius,
                    32,
                    32
                );
    
    
            const material =
                new THREE.MeshStandardMaterial({
    
                    color:data.color,
    
                    metalness:0.1,
    
                    roughness:0.35
    
                });
    
    
            const sphere =
                new THREE.Mesh(
                    geometry,
                    material
                );
    
    
            sphere.position.set(
                x,
                y,
                z
            );
    
    
            moleculeGroup.add(sphere);
    
    
            if(labelsVisible) {
    
                const label =
                    createLabel(symbol);
    
                label.position.set(
                    x,
                    y + data.radius + 0.15,
                    z
                );
    
                moleculeGroup.add(label);
    
            }
    
        });
    
    
        if(bondsVisible) {
    
           molecule.bonds.forEach(pair => {

    const order = pair[2] || 1;

    createBond(
        molecule.atoms[pair[0]],
        molecule.atoms[pair[1]],
        order
    );

});
    
        }
    
    
        moleculeGroup.rotation.set(
            0,
            0,
            0
        );
    
    }
    
    
    /* ============================================================
       CREATE BOND
    ============================================================ */
    
    function createBond(a, b, order = 1) {

    const start = new THREE.Vector3(
        a[1],
        a[2],
        a[3]
    );

    const end = new THREE.Vector3(
        b[1],
        b[2],
        b[3]
    );

    const direction = new THREE.Vector3()
        .subVectors(end, start);

    const length = direction.length();

    const unitDirection = direction.clone().normalize();

    /* Bond thickness */
    const radius = 0.05;

    /* Find a vector perpendicular to the bond */
    let offsetDirection = new THREE.Vector3(0, 1, 0);

    if (Math.abs(unitDirection.dot(offsetDirection)) > 0.9) {
        offsetDirection.set(1, 0, 0);
    }

    offsetDirection
        .crossVectors(unitDirection, offsetDirection)
        .normalize();

    /* Distance between parallel bonds */
    const spacing = 0.13;

    let offsets = [];

    if (order === 1) {

        offsets = [0];

    } else if (order === 2) {

        offsets = [
            -spacing / 2,
             spacing / 2
        ];

    } else if (order === 3) {

        offsets = [
            -spacing,
             0,
             spacing
        ];

    } else {

        offsets = [0];

    }

    offsets.forEach(offset => {

        const offsetVector =
            offsetDirection.clone()
            .multiplyScalar(offset);

        const bondStart =
            start.clone().add(offsetVector);

        const bondEnd =
            end.clone().add(offsetVector);

        const geometry =
            new THREE.CylinderGeometry(
                radius,
                radius,
                length,
                16
            );

        const material =
            new THREE.MeshStandardMaterial({
                color: 0xb9c5bd,
                roughness: 0.4
            });

        const cylinder =
            new THREE.Mesh(
                geometry,
                material
            );

        cylinder.position.copy(
            bondStart
                .clone()
                .add(bondEnd)
                .multiplyScalar(0.5)
        );

        cylinder.quaternion.setFromUnitVectors(
            new THREE.Vector3(0, 1, 0),
            unitDirection
        );

        moleculeGroup.add(cylinder);

    });

}
    
    
    /* ============================================================
       LABEL
    ============================================================ */
    
    function createLabel(text) {
    
        const canvas =
            document.createElement("canvas");
    
        canvas.width = 128;
        canvas.height = 64;
    
        const ctx =
            canvas.getContext("2d");
    
        ctx.clearRect(
            0,
            0,
            128,
            64
        );
    
        ctx.font =
            "bold 32px Arial";
    
        ctx.fillStyle =
            "white";
    
        ctx.textAlign =
            "center";
    
        ctx.textBaseline =
            "middle";
    
        ctx.fillText(
            text,
            64,
            32
        );
    
    
        const texture =
            new THREE.CanvasTexture(canvas);
    
    
        const material =
            new THREE.SpriteMaterial({
                map:texture,
                transparent:true
            });
    
    
        const sprite =
            new THREE.Sprite(material);
    
    
        sprite.scale.set(
            0.65,
            0.32,
            1
        );
    
    
        return sprite;
    
    }
    
    
    /* ============================================================
       LOAD MOLECULE LIST
    ============================================================ */
    
    function renderMoleculeList(list = molecules) {
    
        const container =
            document.getElementById(
                "moleculeList"
            );
    
        container.innerHTML = "";
    
    
        document.getElementById(
            "moleculeCount"
        ).textContent = list.length;
    
    
        list.forEach((molecule,index) => {
    
            const item =
                document.createElement("div");
    
            item.className =
                "moleculeItem";
    
    
            item.innerHTML = `
    
                <strong>${molecule.name}</strong>
    
                <span>
                    ${molecule.formula}
                </span>
    
            `;
    
    
            item.onclick = () => {
    
                document
                    .querySelectorAll(".moleculeItem")
                    .forEach(x =>
                        x.classList.remove("selected")
                    );
    
                item.classList.add("selected");
    
                selectMolecule(molecule);
    
            };
    
    
            container.appendChild(item);
    
        });
    
    }
    
    
    /* ============================================================
       SELECT MOLECULE
    ============================================================ */
    
    function selectMolecule(molecule) {
    
        currentMolecule = molecule;
    
        drawMolecule(molecule);
    
    
        document.getElementById(
            "moleculeName"
        ).textContent =
            molecule.name;
    
    
        document.getElementById(
            "moleculeFormula"
        ).textContent =
            molecule.formula;
    
    
        document.getElementById(
            "shape"
        ).textContent =
            molecule.shape;
    
    
        document.getElementById(
            "hybridization"
        ).textContent =
            molecule.hybridization;
    
    
        document.getElementById(
            "angle"
        ).textContent =
            molecule.angle;
    
    
        document.getElementById(
            "polarity"
        ).textContent =
            molecule.polarity;
    
    
        document.getElementById(
            "domains"
        ).textContent =
            molecule.domains;
    
    }
    
    
    /* ============================================================
       SEARCH
    ============================================================ */
    
    function searchMolecules() {
    
        const query =
            document
                .getElementById("searchInput")
                .value
                .toLowerCase();
    
    
        let result =
            molecules.filter(m => {
    
                return (
    
                    m.name
                        .toLowerCase()
                        .includes(query)
    
                    ||
    
                    m.formula
                        .toLowerCase()
                        .includes(query)
    
                );
    
            });
    
    
        if(currentCategory !== "All") {
    
            result =
                result.filter(
                    m =>
                    m.category === currentCategory
                );
    
        }
    
    
        renderMoleculeList(result);
    
    }
    
    
    /* ============================================================
       CATEGORY FILTER
    ============================================================ */
    
    function filterCategory(category,button) {
    
        currentCategory = category;
    
    
        document
            .querySelectorAll(".category")
            .forEach(btn =>
                btn.classList.remove("active")
            );
    
    
        button.classList.add("active");
    
    
        searchMolecules();
    
    }
    
    
    /* ============================================================
       LABELS
    ============================================================ */
    
    function toggleLabels() {
    
        labelsVisible =
            !labelsVisible;
    
    
        if(currentMolecule) {
    
            drawMolecule(
                currentMolecule
            );
    
        }
    
    }
    
    
    /* ============================================================
       BONDS
    ============================================================ */
    
    function toggleBonds() {
    
        bondsVisible =
            !bondsVisible;
    
    
        if(currentMolecule) {
    
            drawMolecule(
                currentMolecule
            );
    
        }
    
    }
    
    
    /* ============================================================
       RANDOM MOLECULE
    ============================================================ */
    
    function randomMolecule() {
    
        const random =
            molecules[
                Math.floor(
                    Math.random() *
                    molecules.length
                )
            ];
    
    
        selectMolecule(random);
    
    }
    
    
    /* ============================================================
       CAMERA RESET
    ============================================================ */
    
    function resetCamera() {
    
        camera.position.set(
            0,
            0,
            9
        );
    
        moleculeGroup.rotation.set(
            0,
            0,
            0
        );
    
    }
    
    
    /* ============================================================
       MOUSE CONTROLS
    ============================================================ */

/* ============================================================
   MOUSE + TOUCH + POINTER CONTROLS
============================================================ */

function setupMouseControls() {

    const canvas = renderer.domElement;

    let dragging = false;

    let previousX = 0;
    let previousY = 0;

    /* Prevent browser gestures/scrolling inside viewer */
    canvas.style.touchAction = "none";

    /* ========================================================
       POINTER DOWN
       Works with:
       - Mouse
       - Touch
       - Stylus
    ======================================================== */

    canvas.addEventListener("pointerdown", (e) => {

        /* Only allow primary pointer */
        if (e.isPrimary === false) return;

        dragging = true;

        previousX = e.clientX;
        previousY = e.clientY;

        /* Capture pointer so dragging continues */
        canvas.setPointerCapture(e.pointerId);

    });


    /* ========================================================
       POINTER MOVE
    ======================================================== */

    canvas.addEventListener("pointermove", (e) => {

        if (!dragging) return;

        if (e.isPrimary === false) return;

        const dx = e.clientX - previousX;
        const dy = e.clientY - previousY;

        /* Rotate molecule */

        moleculeGroup.rotation.y += dx * 0.01;

        moleculeGroup.rotation.x += dy * 0.01;

        /* Optional: prevent excessive X rotation */

        moleculeGroup.rotation.x = Math.max(
            -Math.PI,
            Math.min(
                Math.PI,
                moleculeGroup.rotation.x
            )
        );

        previousX = e.clientX;
        previousY = e.clientY;

    });


    /* ========================================================
       POINTER UP
    ======================================================== */

    canvas.addEventListener("pointerup", (e) => {

        dragging = false;

        try {
            canvas.releasePointerCapture(e.pointerId);
        } catch (error) {
            /* Pointer capture may already be released */
        }

    });


    /* ========================================================
       POINTER CANCEL
    ======================================================== */

    canvas.addEventListener("pointercancel", () => {

        dragging = false;

    });


    /* ========================================================
       POINTER LEAVE
    ======================================================== */

    canvas.addEventListener("pointerleave", () => {

        /* Don't force-stop touch dragging because
           pointer capture handles it. */

        if (dragging && !("ontouchstart" in window)) {
            dragging = false;
        }

    });


    /* ========================================================
       MOUSE WHEEL / TRACKPAD ZOOM
    ======================================================== */

    canvas.addEventListener("wheel", (e) => {

        e.preventDefault();

        camera.position.z += e.deltaY * 0.01;

        camera.position.z = Math.max(
            2.5,
            Math.min(
                30,
                camera.position.z
            )
        );

    }, { passive: false });

}
    
    /* ============================================================
       ANIMATION
    ============================================================ */
    
    function animate() {
    
        requestAnimationFrame(
            animate
        );
    
    
        renderer.render(
            scene,
            camera
        );
    
    }
    
    
    /* ============================================================
       RESIZE
    ============================================================ */
    
    window.addEventListener(
        "resize",
        () => {
    
            const container =
                document.getElementById(
                    "viewer"
                );
    
    
            if(!camera || !renderer)
                return;
    
    
            camera.aspect =
                container.clientWidth /
                container.clientHeight;
    
    
            camera.updateProjectionMatrix();
    
    
            renderer.setSize(
                container.clientWidth,
                container.clientHeight
            );
    
        }
    );
    
    
    /* ============================================================
       PERIODIC TABLE
    ============================================================ */
    
    const periodicElements = [
    
    ["H","Hydrogen",1,1],
    ["He","Helium",1,18],
    
    ["Li","Lithium",2,1],
    ["Be","Beryllium",2,2],
    ["B","Boron",2,13],
    ["C","Carbon",2,14],
    ["N","Nitrogen",2,15],
    ["O","Oxygen",2,16],
    ["F","Fluorine",2,17],
    ["Ne","Neon",2,18],
    
    ["Na","Sodium",3,1],
    ["Mg","Magnesium",3,2],
    ["Al","Aluminium",3,13],
    ["Si","Silicon",3,14],
    ["P","Phosphorus",3,15],
    ["S","Sulfur",3,16],
    ["Cl","Chlorine",3,17],
    ["Ar","Argon",3,18],
    
    ["K","Potassium",4,1],
    ["Ca","Calcium",4,2],
    ["Sc","Scandium",4,3],
    ["Ti","Titanium",4,4],
    ["V","Vanadium",4,5],
    ["Cr","Chromium",4,6],
    ["Mn","Manganese",4,7],
    ["Fe","Iron",4,8],
    ["Co","Cobalt",4,9],
    ["Ni","Nickel",4,10],
    ["Cu","Copper",4,11],
    ["Zn","Zinc",4,12],
    ["Ga","Gallium",4,13],
    ["Ge","Germanium",4,14],
    ["As","Arsenic",4,15],
    ["Se","Selenium",4,16],
    ["Br","Bromine",4,17],
    ["Kr","Krypton",4,18],
    
    ["Rb","Rubidium",5,1],
    ["Sr","Strontium",5,2],
    ["Y","Yttrium",5,3],
    ["Zr","Zirconium",5,4],
    ["Nb","Niobium",5,5],
    ["Mo","Molybdenum",5,6],
    ["Tc","Technetium",5,7],
    ["Ru","Ruthenium",5,8],
    ["Rh","Rhodium",5,9],
    ["Pd","Palladium",5,10],
    ["Ag","Silver",5,11],
    ["Cd","Cadmium",5,12],
    ["In","Indium",5,13],
    ["Sn","Tin",5,14],
    ["Sb","Antimony",5,15],
    ["Te","Tellurium",5,16],
    ["I","Iodine",5,17],
    ["Xe","Xenon",5,18],
    
    ["Cs","Cesium",6,1],
    ["Ba","Barium",6,2],
    
    ["Hf","Hafnium",6,4],
    ["Ta","Tantalum",6,5],
    ["W","Tungsten",6,6],
    ["Re","Rhenium",6,7],
    ["Os","Osmium",6,8],
    ["Ir","Iridium",6,9],
    ["Pt","Platinum",6,10],
    ["Au","Gold",6,11],
    ["Hg","Mercury",6,12],
    ["Tl","Thallium",6,13],
    ["Pb","Lead",6,14],
    ["Bi","Bismuth",6,15],
    ["Po","Polonium",6,16],
    ["At","Astatine",6,17],
    ["Rn","Radon",6,18],
    
    ["Fr","Francium",7,1],
    ["Ra","Radium",7,2],
    
    ["Rf","Rutherfordium",7,4],
    ["Db","Dubnium",7,5],
    ["Sg","Seaborgium",7,6],
    ["Bh","Bohrium",7,7],
    ["Hs","Hassium",7,8],
    ["Mt","Meitnerium",7,9],
    ["Ds","Darmstadtium",7,10],
    ["Rg","Roentgenium",7,11],
    ["Cn","Copernicium",7,12],
    ["Nh","Nihonium",7,13],
    ["Fl","Flerovium",7,14],
    ["Mc","Moscovium",7,15],
    ["Lv","Livermorium",7,16],
    ["Ts","Tennessine",7,17],
    ["Og","Oganesson",7,18]
    
    ];
    
    
    /* ============================================================
       RENDER PERIODIC TABLE
    ============================================================ */
    /* ============================================================
   ELEMENT CLASSIFICATION
   ============================================================ */

const elementCategories = {

    /* Alkali metals */
    Li: "alkali",
    Na: "alkali",
    K: "alkali",
    Rb: "alkali",
    Cs: "alkali",
    Fr: "alkali",

    /* Alkaline earth metals */
    Be: "alkaline-earth",
    Mg: "alkaline-earth",
    Ca: "alkaline-earth",
    Sr: "alkaline-earth",
    Ba: "alkaline-earth",
    Ra: "alkaline-earth",

    /* Transition metals */
    Sc: "transition",
    Ti: "transition",
    V: "transition",
    Cr: "transition",
    Mn: "transition",
    Fe: "transition",
    Co: "transition",
    Ni: "transition",
    Cu: "transition",
    Zn: "transition",

    Y: "transition",
    Zr: "transition",
    Nb: "transition",
    Mo: "transition",
    Tc: "transition",
    Ru: "transition",
    Rh: "transition",
    Pd: "transition",
    Ag: "transition",
    Cd: "transition",

    Hf: "transition",
    Ta: "transition",
    W: "transition",
    Re: "transition",
    Os: "transition",
    Ir: "transition",
    Pt: "transition",
    Au: "transition",
    Hg: "transition",

    Rf: "transition",
    Db: "transition",
    Sg: "transition",
    Bh: "transition",
    Hs: "transition",
    Mt: "transition",
    Ds: "transition",
    Rg: "transition",
    Cn: "transition",

    /* Post-transition metals */
    Al: "post-transition",
    Ga: "post-transition",
    In: "post-transition",
    Sn: "post-transition",
    Tl: "post-transition",
    Pb: "post-transition",
    Bi: "post-transition",
    Po: "post-transition",
    Nh: "post-transition",
    Fl: "post-transition",
    Mc: "post-transition",
    Lv: "post-transition",

    /* Metalloids */
    B: "metalloid",
    Si: "metalloid",
    Ge: "metalloid",
    As: "metalloid",
    Sb: "metalloid",
    Te: "metalloid",

    /* Reactive non-metals */
    H: "hydrogen",
    C: "nonmetal",
    N: "nonmetal",
    O: "nonmetal",
    F: "nonmetal",
    P: "nonmetal",
    S: "nonmetal",
    Se: "nonmetal",
    Cl: "nonmetal",
    Br: "nonmetal",
    I: "nonmetal",
    At: "nonmetal",
    Ts: "nonmetal",

    /* Noble gases */
    He: "noble-gas",
    Ne: "noble-gas",
    Ar: "noble-gas",
    Kr: "noble-gas",
    Xe: "noble-gas",
    Rn: "noble-gas",
    Og: "noble-gas"
};
    function renderPeriodicTable() {

        const table = document.getElementById("periodicTable");
    
        table.innerHTML = "";
    
        const colors = {

            /* Alkali Metals */
            alkali: "#ff6b6b",
        
            /* Alkaline Earth Metals */
            "alkaline-earth": "#ffb86b",
        
            /* Transition Metals */
            transition: "#ffd93d",
        
            /* Post-Transition Metals */
            "post-transition": "#4dd0e1",
        
            /* Metalloids */
            metalloid: "#69db7c",
        
            /* Nonmetals */
            nonmetal: "#74c0fc",
        
            /* Hydrogen */
            hydrogen: "#a5d8ff",
        
            /* Noble Gases */
            "noble-gas": "#c084fc",
        
            /* Lanthanides */
            lanthanide: "#f783ac",
        
            /* Actinides */
            actinide: "#da9e6b"
        };
    
        periodicElements.forEach((element, index) => {
    
            const [
                symbol,
                name,
                period,
                group
            ] = element;
    
            const category =
                elementCategories[symbol] || "transition";
    
            const box =
                document.createElement("div");
    
            box.className = "element";
    
            /* Position */
            box.style.gridColumn = group;
            box.style.gridRow = period;
    
            /* FORCE COLOR */
            box.style.background = colors[category];
    
            /* Make transition-metal yellow readable */
            if (category === "transition") {
                box.style.color = "#111";
            } else {
                box.style.color = "#fff";
            }
    
            box.innerHTML = `
    
                <div class="number">
                    ${index + 1}
                </div>
    
                <div class="symbol">
                    ${symbol}
                </div>
    
                <div class="name">
                    ${name}
                </div>
    
            `;
    
            box.onclick = () => {
    
                showElement(
                    symbol,
                    name,
                    index + 1
                );
    
            };
    
            table.appendChild(box);
    
        });
    }
    
    
    /* ============================================================
       ELEMENT INFO
    ============================================================ */
    
    function showElement(
        symbol,
        name,
        atomicNumber
    ) {
    
        document.getElementById(
            "elementDetails"
        ).innerHTML = `
    
            <strong style="font-size:25px;color:#3cff9b">
                ${symbol}
            </strong>
    
            <br><br>
    
            <strong>${name}</strong>
    
            <br><br>
    
            Atomic Number:
            ${atomicNumber}
    
        `;
    
    }
    
    
    /* ============================================================
       PAGE SWITCHING
    ============================================================ */
    
    function showMolecules() {
    
        document
            .getElementById("moleculePage")
            .classList.remove("hidden");
    
    
        document
            .getElementById("periodicPage")
            .classList.add("hidden");
    
    }
    
    
    function showPeriodicTable() {
    
        document
            .getElementById("moleculePage")
            .classList.add("hidden");
    
    
        document
            .getElementById("periodicPage")
            .classList.remove("hidden");
    
    }
    
    
    /* ============================================================
       START APPLICATION
    ============================================================ */
    
    window.addEventListener(
        "load",
        () => {
    
            initViewer();
    
            renderMoleculeList();
    
            renderPeriodicTable();
    
    
            /* Automatically show water */
    
            selectMolecule(
                molecules.find(
                    m => m.name === "Water"
                )
            );
    
        }
    );
    // =========================================================
// CLEAR ALL 3D ANGLE MARKINGS
// =========================================================

function clearAngleObjects() {

    angleObjects.forEach(obj => {

        if (obj.parent) {
            obj.parent.remove(obj);
        }

        obj.traverse(child => {

            if (child.geometry) {
                child.geometry.dispose();
            }

            if (child.material) {

                if (Array.isArray(child.material)) {
                    child.material.forEach(m => m.dispose());
                } else {
                    child.material.dispose();
                }

            }

        });

    });

    angleObjects = [];
}


// =========================================================
// CREATE 3D TEXT SPRITE
// =========================================================

function createAngleText(text) {

    const canvas = document.createElement("canvas");

    canvas.width = 256;
    canvas.height = 96;

    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "rgba(0,0,0,0.75)";
    ctx.roundRect(10, 10, 236, 76, 18);
    ctx.fill();

    // Text
    ctx.font = "bold 34px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.fillStyle = "#7CFF9B";
    ctx.fillText(text, 128, 48);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthTest: false
    });

    const sprite = new THREE.Sprite(material);

    sprite.scale.set(1.4, 0.52, 1);

    return sprite;
}


// =========================================================
// CREATE ANGLE ARC
// =========================================================

function createAngleArc(center, point1, point2, angleDegrees) {

    const group = new THREE.Group();

    const v1 = new THREE.Vector3()
        .subVectors(point1, center)
        .normalize();

    const v2 = new THREE.Vector3()
        .subVectors(point2, center)
        .normalize();

    // Angle between bonds
    const angle = Math.acos(
        THREE.MathUtils.clamp(v1.dot(v2), -1, 1)
    );

    // Create perpendicular basis
    let axis = new THREE.Vector3()
        .crossVectors(v1, v2)
        .normalize();

    // Handle 180° case
    if (axis.lengthSq() < 0.001) {

        axis = new THREE.Vector3(0, 1, 0);

        if (Math.abs(v1.dot(axis)) > 0.9) {
            axis.set(1, 0, 0);
        }

        axis.cross(v1).normalize();
    }

    const radius = 0.55;

    const segments = 48;

    const points = [];

    for (let i = 0; i <= segments; i++) {

        const t = i / segments;

        const currentAngle = angle * t;

        const q = new THREE.Quaternion()
            .setFromAxisAngle(axis, currentAngle);

        const direction = v1.clone()
            .applyQuaternion(q)
            .normalize();

        points.push(
            center.clone().add(
                direction.multiplyScalar(radius)
            )
        );
    }

    const geometry = new THREE.BufferGeometry()
        .setFromPoints(points);

    const material = new THREE.LineBasicMaterial({
        color: 0x7CFF9B,
        transparent: true,
        opacity: 0.95,
        depthTest: false
    });

    const arc = new THREE.Line(
        geometry,
        material
    );

    group.add(arc);

    // =====================================================
    // ANGLE LABEL
    // =====================================================

    const middleAngle = angle / 2;

    const qMiddle = new THREE.Quaternion()
        .setFromAxisAngle(axis, middleAngle);

    const labelDirection = v1.clone()
        .applyQuaternion(qMiddle)
        .normalize();

    const labelPosition = center.clone().add(
        labelDirection.multiplyScalar(radius + 0.35)
    );

    const label = createAngleText(
        angleDegrees + "°"
    );

    label.position.copy(labelPosition);

    group.add(label);

    return group;
}


// =========================================================
// CALCULATE AND DISPLAY ANGLES
// =========================================================

function updateBondAngles() {

    clearAngleObjects();

    if (!showAngles) return;

    if (!window.currentMolecule) return;

    const molecule = window.currentMolecule;

    /*
        Expected molecule structure:

        {
            atoms: [
                { element: "O", position: [0,0,0] },
                { element: "H", position: [1,0,0] },
                { element: "H", position: [-0.33,0.94,0] }
            ],

            bonds: [
                [0,1],
                [0,2]
            ]
        }
    */

    if (!molecule.atoms || !molecule.bonds) return;

    const neighbors = {};

    molecule.atoms.forEach((atom, index) => {
        neighbors[index] = [];
    });

    molecule.bonds.forEach(bond => {

        const a = bond[0];
        const b = bond[1];

        neighbors[a].push(b);
        neighbors[b].push(a);

    });

    // =====================================================
    // FIND CENTRAL ATOMS
    // =====================================================

    Object.keys(neighbors).forEach(centerIndex => {

        const center = Number(centerIndex);

        const connectedAtoms = neighbors[center];

        if (connectedAtoms.length < 2) return;

        const centerPosition =
            getAtomPosition(molecule.atoms[center]);

        // Every pair of bonds
        for (let i = 0; i < connectedAtoms.length; i++) {

            for (
                let j = i + 1;
                j < connectedAtoms.length;
                j++
            ) {

                const atomA =
                    molecule.atoms[connectedAtoms[i]];

                const atomB =
                    molecule.atoms[connectedAtoms[j]];

                const positionA =
                    getAtomPosition(atomA);

                const positionB =
                    getAtomPosition(atomB);

                const vectorA = new THREE.Vector3()
                    .subVectors(positionA, centerPosition)
                    .normalize();

                const vectorB = new THREE.Vector3()
                    .subVectors(positionB, centerPosition)
                    .normalize();

                const angleRadians =
                    Math.acos(
                        THREE.MathUtils.clamp(
                            vectorA.dot(vectorB),
                            -1,
                            1
                        )
                    );

                const angleDegrees =
                    Math.round(
                        THREE.MathUtils.radToDeg(
                            angleRadians
                        ) * 10
                    ) / 10;

                const angleObject =
                    createAngleArc(
                        centerPosition,
                        positionA,
                        positionB,
                        angleDegrees
                    );

                moleculeGroup.add(angleObject);

                angleObjects.push(angleObject);
            }
        }
    });
}


// =========================================================
// GET ATOM POSITION
// =========================================================

function getAtomPosition(atom) {

    if (atom.position instanceof THREE.Vector3) {
        return atom.position.clone();
    }

    if (Array.isArray(atom.position)) {

        return new THREE.Vector3(
            atom.position[0],
            atom.position[1],
            atom.position[2]
        );
    }

    return new THREE.Vector3(0, 0, 0);
}


// =========================================================
// TOGGLE ANGLES
// =========================================================

function toggleAngles() {

    showAngles = !showAngles;

    updateBondAngles();
}
