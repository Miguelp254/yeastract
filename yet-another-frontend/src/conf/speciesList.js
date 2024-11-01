const speciesList = {
    scerevisiae: {
        url: "http://yeastract-plus.org/yeastract/scerevisiae/",
        path: "scerevisiae",
        short: "S.cerevisiae",
        long: "Saccharomyces cerevisiae",
        dbspecies: "Saccharomyces cerevisiae",
        dbstrains: ["S288c"],
        ganalytics: "UA-298893-1",
        ext: [
            { name: "SGD ", url: "https://www.yeastgenome.org/locus/" },
            { name: "KEGG", url: "https://www.genome.jp/entry/sce:" },
        ],
        sample: [
            {
                strain: "S288c",
                tfs: "Pdr1\nHaa1\nMsn2\nYap1",
                tgs: "Pdr5\nPdr12\nTpo2\nCtt1\nSod2\nHsp12\nHsp26\nTrr1",
            },
        ],
        // S288c_tfs  : "Pdr1\nHaa1\nMsn2\nYap1",
        // S288c_tgs  : "Pdr5\nPdr12\nTpo2\nCtt1\nSod2\nHsp12\nHsp26\nTrr1",
    },
    cglabrata: {
        url: "http://yeastract-plus.org/pathoyeastract/cglabrata/",
        path: "cglabrata",
        short: "C.glabrata",
        long: "Candida glabrata",
        dbspecies: "Candida glabrata",
        dbstrains: ["CBS138"],
        ganalytics: "UA-79262015-2",
        ext: [
            {
                name: "CGD",
                url: "http://www.candidagenome.org/cgi-bin/locus.pl?locus=",
            },
            { name: "KEGG", url: "https://www.genome.jp/entry/cgr:" },
        ],
        sample: [
            {
                strain: "CBS138",
                tfs: "SKN7\nYAP1\nPDR1\nACE2",
                tgs: "CDR1\nCDR2\nSNQ2\nQDR2\nERG11\nERG3",
            },
        ],
        // CBS138.tfs   : "SKN7\nYAP1\nPDR1\nACE2",
        // CBS138.tgs   : "CDR1\nCDR2\nSNQ2\nQDR2\nERG11\nERG3",
    },
    calbicans: {
        url: "http://yeastract-plus.org/pathoyeastract/calbicans/",
        path: "calbicans",
        short: "C.albicans",
        long: "Candida albicans",
        dbspecies: "Candida albicans",
        dbstrains: ["SC5314"],
        ganalytics: "UA-79262015-3",
        ext: [
            {
                name: "CGD",
                url: "http://www.candidagenome.org/cgi-bin/locus.pl?locus=",
            },
            { name: "KEGG", url: "https://www.genome.jp/entry/cal:" },
        ],
        sample: [
            {
                strain: "SC5314",
                tfs: "CAP1\nTAC1\nMRR1",
                tgs: "CDR1\nCDR2\nERG11\nFLU1\nQDR1\nQDR2\nQDR3",
            },
        ],
        // SC5314.tfs   : "CAP1\nTAC1\nMRR1",
        // SC5314.tgs   : "CDR1\nCDR2\nERG11\nFLU1\nQDR1\nQDR2\nQDR3",
    },
    cparapsilosis: {
        url: "http://yeastract-plus.org/pathoyeastract/cparapsilosis/",
        path: "cparapsilosis",
        short: "C.parapsilosis",
        long: "Candida parapsilosis",
        dbspecies: "Candida parapsilosis",
        dbstrains: ["CDC317"],
        ganalytics: "UA-79262015-6",
        ext: [
            {
                name: "CGD",
                url: "http://www.candidagenome.org/cgi-bin/locus.pl?locus=",
            },
        ],
        sample: [
            {
                strain: "CDC317",
                tfs: "EFG1\nBCR1\nUPC2",
                tgs: "CPAR2_100040\nCPAR2_100090\nCPAR2_100200\nCPAR2_100330\nCPAR2_204970\nCPAR2_206020\nCPAR2_702500",
            },
        ],
        // CDC317.tfs   : "EFG1\nBCR1\nUPC2",
        // CDC317.tgs   : "CPAR2_100040\nCPAR2_100090\nCPAR2_100200\nCPAR2_100330\nCPAR2_204970\nCPAR2_206020\nCPAR2_702500",
    },
    ctropicalis: {
        url: "http://yeastract-plus.org/pathoyeastract/ctropicalis/",
        path: "ctropicalis",
        short: "C.tropicalis",
        long: "Candida tropicalis",
        dbspecies: "Candida tropicalis",
        dbstrains: ["MYA-3404"],
        ganalytics: "UA-79262015-5",
        ext: [
            {
                name: "CGD",
                url: "http://www.candidagenome.org/cgi-bin/locus.pl?locus=",
            },
            { name: "KEGG", url: "https://www.genome.jp/entry/ctp:" },
        ],
        sample: [
            {
                strain: "MYA-3404",
                tfs: "CTRG_04257\nCTRG_03345\nCTRG_02751\nCTRG_02294",
                tgs: "CTRG_04380\nCTRG_03942\nCTRG_04784\nCTRG_03270\nCTRG_03271\nCTRG_03231\nCTRG_02945",
            },
        ],
        // MYA-3404.tfs   : "CTRG_04257\nCTRG_03345\nCTRG_02751\nCTRG_02294",
        // MYA-3404.tgs   : "CTRG_04380\nCTRG_03942\nCTRG_04784\nCTRG_03270\nCTRG_03271\nCTRG_03231\nCTRG_02945",
    },
    cauris: {
        url: "http://yeastract-plus.org/pathoyeastract/cauris/",
        path: "cauris",
        short: "C.auris",
        long: "Candida auris",
        dbspecies: "Candida auris",
        dbstrains: ["B8441"],
        ganalytics: "UA-79262015-7",
        ext: [
            {
                name: "CGD",
                url: "http://www.candidagenome.org/cgi-bin/locus.pl?locus=",
            },
        ],
        sample: [
            {
                strain: "B8441",
                tfs: "CJJ09_000001\nCJJ09_000002\nCJJ09_000003\nCJJ09_000004",
                tgs: "CJJ09_000005\nCJJ09_000006\nCJJ09_000007\nCJJ09_000008\nCJJ09_000009\nCJJ09_000010",
            },
        ],
        // B8441.tfs   : "CJJ09_000001\nCJJ09_000002\nCJJ09_000003\nCJJ09_000004",
        // B8441.tgs   : "CJJ09_000005\nCJJ09_000006\nCJJ09_000007\nCJJ09_000008\nCJJ09_000009\nCJJ09_000010",
    },
    zbailii: {
        url: "http://yeastract-plus.org/ncyeastract/zbailii/",
        path: "zbailii",
        short: "Z.bailii",
        long: "Zygosaccharomyces bailii",
        dbspecies: "Zygosaccharomyces bailii",
        dbstrains: ["IST302"],
        ganalytics: "UA-118721662-2",
        ext: [{ name: "ENA@EBI", url: "https://www.ebi.ac.uk/ena/data/view/" }],
        sample: [
            {
                strain: "IST302",
                tfs: "ZbHaa1",
                tgs: "ZbYGP1\nZbADH3\nZbMDH2\nZbGDH1",
            },
        ],
        // IST302.tfs   : "ZbHaa1",
        // IST302.tgs   : "ZbYGP1\nZbADH3\nZbMDH2\nZbGDH1",
    },
    klactis: {
        url: "http://yeastract-plus.org/ncyeastract/klactis/",
        path: "klactis",
        short: "K.lactis",
        long: "Kluyveromyces lactis",
        dbspecies: "Kluyveromyces lactis",
        dbstrains: ["NRRL Y-1140"],
        ganalytics: "UA-118721662-3",
        ext: [
            {
                name: "GenBank",
                url: "https://www.ncbi.nlm.nih.gov/gene/?term=",
            },
            { name: "KEGG", url: "https://www.genome.jp/entry/kla:" },
        ],
        sample: [
            {
                strain: "NRRL Y-1140",
                tfs: "KLLA0_E00265g",
                tgs: "KLLA0_E00243g\nKLLA0_F00154g\nKLLA0_D10978g\nKLLA0_B01584g\nKLLA0_B08239g",
            },
        ],
        // NRRL Y-1140.tfs   : "KLLA0_E00265g",
        // NRRL Y-1140.tgs   : "KLLA0_E00243g\nKLLA0_F00154g\nKLLA0_D10978g\nKLLA0_B01584g\nKLLA0_B08239g",
    },
    kmarxianus: {
        url: "http://yeastract-plus.org/ncyeastract/kmarxianus/",
        path: "kmarxianus",
        short: "K.marxianus",
        long: "Kluyveromyces marxianus",
        dbspecies: "Kluyveromyces marxianus",
        dbstrains: ["DMKU3-1042"],
        ganalytics: "UA-118721662-4",
        ext: [
            {
                name: "GenBank",
                url: "https://www.ncbi.nlm.nih.gov/gene/?term=",
            },
            { name: "KEGG", url: "https://www.genome.jp/entry/kmx:" },
        ],
        sample: [
            {
                strain: "DMKU3-1042",
                tfs: "Some\nsample\ntfs",
                tgs: "Some\nsample\ngenes",
            },
        ],
        // DMKU3-1042.tfs   : "Some\nsample\ntfs",
        // DMKU3-1042.tgs   : "Some\nsample\ngenes",
    },
    ylipolytica: {
        url: "http://yeastract-plus.org/ncyeastract/ylipolytica/",
        short: "Y.lipolytica",
        long: "Yarrowia lipolytica",
        dbspecies: "Yarrowia lipolytica",
        dbstrains: ["CLIB122"],
        ganalytics: "UA-118721662-5",
        ext: [
            {
                name: "GenBank",
                url: "https://www.ncbi.nlm.nih.gov/gene/?term=",
            },
            { name: "KEGG", url: "https://www.genome.jp/entry/yli:" },
        ],
        sample: [
            {
                strain: "CLIB122",
                tfs: "YALI0_B21582g",
                tgs: "YALI0_D04873g\nYALI0_D19558g\nYALI0_E22286g\nYALI0_E24167g\nYALI0_E28193g",
            },
        ],
        // CLIB122.tfs   : "YALI0_B21582g",
        // CLIB122.tgs   : "YALI0_D04873g\nYALI0_D19558g\nYALI0_E22286g\nYALI0_E24167g\nYALI0_E28193g",
    },
    kphaffii: {
        url: "http://yeastract-plus.org/ncyeastract/kphaffii/",
        path: "kphaffii",
        short: "K.phaffii",
        long: "Komagataella phaffii",
        dbspecies: "Komagataella phaffii",
        dbstrains: ["GS115"],
        ganalytics: "UA-118721662-7",
        ext: [
            { name: "GenBank", url: "https://www.ncbi.nlm.nih.gov/protein/" },
            { name: "KEGG", url: "https://www.genome.jp/entry/ppa:" },
        ],
        sample: [
            {
                strain: "GS115",
                tfs: "CAY69995",
                tgs: "CAY72092\nCAY71091\nCAY70992\nCAY69734\nCAY72063",
            },
        ],
        // GS115.tfs : "CAY69995",
        // GS115.tgs : "CAY72092\nCAY71091\nCAY70992\nCAY69734\nCAY72063",
    },
    spombe: {
        url: "http://yeastract-plus.org/community/spombe/",
        path: "spombe",
        short: "S.pombe",
        long: "Schizosaccharomyces pombe",
        dbspecies: "Schizosaccharomyces pombe",
        dbstrains: ["972h-"],
        ganalytics: "G-8P14BF3GBT",
        ext: [{ name: "PomBase", url: "https://www.pombase.org/gene/" }],
        sample: [
            {
                strain: "972h-",
                tfs: "ace2\npap1\natf1\nprr1",
                tgs: "ctt1\nsod1\nmfs1\ngrx1\ntrr1\npgr1\nhsp16\nzwf1",
            },
        ],
        // 972h-.tfs : "ace2\npap1\natf1\nprr1",
        // 972h-.tgs : "ctt1\nsod1\nmfs1\ngrx1\ntrr1\npgr1\nhsp16\nzwf1",
    },
    sboulardii: {
        url: "http://yeastract-plus.org/community/sboulardii/",
        path: "sboulardii",
        short: "S.boulardii",
        long: "Saccharomyces boulardii",
        dbspecies: "Saccharomyces sp. 'boulardii'",
        dbstrains: ["biocodex", "unique28"],
        ganalytics: "UA-127462082-2",
        ext: [
            { name: "GeneBank", url: "https://www.ncbi.nlm.nih.gov/protein/" },
        ],
        sample: [
            {
                strain: "biocodex",
                tfs: "KO01_03989\nKO01_01930\nKO01_01677\nKO01_00278",
                tgs: "KO01_03252\nKO01_01179\nKO01_02534\nKO01_04455\nKO01_04523\nKO01_00344\nKO01_02929",
            },
            {
                strain: "unique28",
                tfs: "AB282_03826\nAB282_02146\nAB282_01893\nAB282_00256",
                tgs: "AB282_03284\nAB282_00630\nAB282_01492\nAB282_04145\nAB282_04780\nAB282_00189\nAB282_01462",
            },
        ],
        // biocodex.tfs : "KO01_03989\nKO01_01930\nKO01_01677\nKO01_00278",
        // biocodex.tgs : "KO01_03252\nKO01_01179\nKO01_02534\nKO01_04455\nKO01_04523\nKO01_00344\nKO01_02929",
        // unique28.tfs : "AB282_03826\nAB282_02146\nAB282_01893\nAB282_00256",
        // unique28.tgs : "AB282_03284\nAB282_00630\nAB282_01492\nAB282_04145\nAB282_04780\nAB282_00189\nAB282_01462",
    },
    rtoruloides: {
        url: "http://yeastract-plus.org/community/rtoruloides/",
        path: "rtoruloides",
        short: "R.toruloides",
        long: "Rhodotorula toruloides",
        dbspecies: "Rhodotorula toruloides",
        dbstrains: ["NP11"],
        ganalytics: "G-TGC6L7JM88",
        ext: [
            { name: "GeneBank", url: "https://www.ncbi.nlm.nih.gov/protein/" },
        ],
        sample: [
            {
                strain: "NP11",
                tfs: "RHTO_01077\nRHTO_00480\nRHTO_07941",
                tgs: "RHTO_01810\nRHTO_07037\nRHTO_00516\nRHTO_01370\nRHTO_00206\nRHTO_06693",
            },
        ],
        // NP11.tfs : "RHTO_01077\nRHTO_00480\nRHTO_07941",
        // NP11.tgs : "RHTO_01810\nRHTO_07037\nRHTO_00516\nRHTO_01370\nRHTO_00206\nRHTO_06693",
    },
    bsoliolivus: {
        url: "http://yeastract-plus.org/community/bsoliolivus/",
        path: "bsoliolivus",
        short: "B.soliolivus",
        long: "Blastobotrys soliolivus",
        dbspecies: "Blastobotrys soliolivus",
        dbstrains: ["IST508"],
        ganalytics: "UA-127462082-2",
        ext: [
            { name: "GeneBank", url: "https://www.ncbi.nlm.nih.gov/protein/" },
        ],
        sample: [
            {
                strain: "IST508",
                tfs: "BSOL_0Y00760\nBSOL_0P01200",
                tgs: "BSOL_0I01890\nBSOL_0G01260\nBSOL_0D00290\nBSOL_0M00980",
            },
        ],
        // IST508.tfs : "BSOL_0Y00760\nBSOL_0P01200",
        // IST508.tgs : "BSOL_0I01890\nBSOL_0G01260\nBSOL_0D00290\nBSOL_0M00980",
    },
};

export default speciesList;
