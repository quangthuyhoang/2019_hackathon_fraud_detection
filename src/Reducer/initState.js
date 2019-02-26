import { accountResponse } from '../mockdata/data';

const initState = {
  query: "",
  currentAccount: "", //used from participantID
  accounts: [
		
    {
			"firstName": "KANHME H",
			"ipAddress": "10.103.5.51",
			"lastName": "HAONKPN",
			"participantAge": "72",
			"participantId": "59640",
			"residentState": "IN",
			"ipGeographicState": "NY",
			"totalAssets": "126580.64",
			"ipFraudScore": "95",
			"riskScore": "HIGH",
			"accountAge": 12
		},
		{
			"firstName": "Anand",
			"ipAddress": "81.177.139.181",
			"ipFraudScore": "95",
			"ipGeographicState": "NY",
			"ipLocation": "Russia",
			"ipMismatch": "Yes",
			"lastName": "Nagarajan",
			"participantAge": 71,
			"participantId": "12",
			"residentState": "CA",
			"riskScore": "Dummy for now",
			"totalAssets": 192444.72
		},
		{
			"firstName": "MOWKAHMUU A",
			"ipAddress": "10.101.37.56",
			"ipFraudScore": "70",
			"ipGeographicState": "-",
			"ipLocation": "-",
			"lastName": "MHMUMNWK",
			"participantAge": 59,
			"participantId": "359991",
			"residentState": "TN",
			"totalAssets": "200892.76"
	},
	{
			"firstName": "WWKUKN H",
			"ipAddress": "10.101.37.56",
			"lastName": "AHMOOK",
			"participantAge": 77,
			"participantId": "1233174",
			"residentState": "TX",
			"totalAssets": "330415.37"
	},
	{
			"firstName": "NKHMNU M",
			"ipAddress": "10.103.49.68",
			"lastName": "KWIIMOO",
			"participantAge": 65,
			"participantId": "2150211",
			"residentState": "TX",
			"totalAssets": "74275.81"
	},
	{
			"firstName": "IUANHE I",
			"ipAddress": "10.103.31.252",
			"lastName": "IAPNHAE",
			"participantAge": 65,
			"participantId": "960707",
			"residentState": "WA",
			"totalAssets": "84312.15"
	},
	{
			"firstName": "LKOKNMI",
			"ipAddress": "10.103.29.21",
			"lastName": "HANUWEMK",
			"participantAge": 63,
			"participantId": "1819109",
			"residentState": "CA",
			"totalAssets": "24745.38"
	},
	{
			"firstName": "LAWWL M",
			"ipAddress": "10.103.49.119",
			"lastName": "HOMWWEI",
			"participantAge": 81,
			"participantId": "1331994",
			"residentState": "AR",
			"totalAssets": "105547.52"
	},
	{
			"firstName": "AAIKE H",
			"ipAddress": "10.103.49.119",
			"lastName": "IUNAKI",
			"participantAge": 43,
			"participantId": "2206406",
			"residentState": "AR",
			"totalAssets": "25555.76"
	},
	{
			"firstName": "AKUE M",
			"ipAddress": "10.101.29.52",
			"lastName": "NKIMEHMNPMN",
			"participantAge": 65,
			"participantId": "2189844",
			"residentState": "CA",
			"totalAssets": "75950.28"
	},
	{
			"firstName": "AKAEEM H",
			"ipAddress": "10.101.37.42",
			"lastName": "IIKNPLIIW",
			"participantAge": 65,
			"participantId": "839668",
			"residentState": "FL",
			"totalAssets": "63596.29"
	},
	{
			"firstName": "LNANPO H",
			"ipAddress": "0:0:0:0:0:0:0:1",
			"lastName": "LAUMO",
			"participantAge": 80,
			"participantId": "1094166",
			"residentState": "NH",
			"totalAssets": "204296.68"
	},
	{
			"firstName": "KWELH O",
			"ipAddress": "0:0:0:0:0:0:0:1",
			"lastName": "LMUMNI",
			"participantAge": 53,
			"participantId": "939366",
			"residentState": "IL",
			"totalAssets": "128694.9"
	},
	{
			"firstName": "KWELH O",
			"ipAddress": "0:0:0:0:0:0:0:1",
			"lastName": "LMUMNI",
			"participantAge": 53,
			"participantId": "939366",
			"residentState": "XX",
			"totalAssets": "128694.9"
	},
	{
			"firstName": "AALHAEEM I",
			"ipAddress": "10.103.5.51",
			"lastName": "OMM",
			"participantAge": 51,
			"participantId": "2499755",
			"residentState": "HI",
			"totalAssets": "101100.1"
	},
	{
			"firstName": "LUWOWL",
			"ipAddress": "10.101.29.153",
			"lastName": "EPKKMUMOOW",
			"participantAge": 77,
			"participantId": "549487",
			"residentState": "NJ",
			"totalAssets": "569327.93"
	},
	{
			"firstName": "WMNKEWKA A",
			"ipAddress": "10.101.29.153",
			"lastName": "UANLHAE",
			"participantAge": 66,
			"participantId": "88754",
			"residentState": "OH",
			"totalAssets": "165658.5"
	},
	{
			"firstName": "MOMEA",
			"ipAddress": "10.103.30.27",
			"lastName": "IWHKH IUPMHM",
			"participantAge": 63,
			"participantId": "638499",
			"residentState": "FL",
			"totalAssets": "170699.92"
	},
	{
			"firstName": "IKKUU M",
			"ipAddress": "10.101.29.94",
			"lastName": "UUKHLIKE",
			"participantAge": 48,
			"participantId": "902342",
			"residentState": "CA",
			"totalAssets": "19005.71"
	},
	{
			"firstName": "HKUAE I",
			"ipAddress": "10.101.29.94",
			"lastName": "NAWKALA",
			"participantAge": 70,
			"participantId": "1349062",
			"residentState": "FL",
			"totalAssets": "196803.7"
	},
	{
			"firstName": "KPNU",
			"ipAddress": "::1",
			"lastName": "KKKUNAE",
			"participantAge": 69,
			"participantId": "1926407",
			"residentState": "CA",
			"totalAssets": "81372.34"
	},
	{
			"firstName": "AKUE",
			"ipAddress": "::1",
			"lastName": "KUAEMH",
			"participantAge": 87,
			"participantId": "731978",
			"residentState": "PA",
			"totalAssets": "591934.14"
	},
	{
			"firstName": "KOANWKM L",
			"ipAddress": "10.103.30.27",
			"lastName": "IHWUU",
			"participantAge": 63,
			"participantId": "306468",
			"residentState": "TN",
			"totalAssets": "173312.2"
	},
	{
			"firstName": "AMAEEM H",
			"ipAddress": "10.101.29.94",
			"lastName": "EMNEIHAEE",
			"participantAge": 64,
			"participantId": "1789493",
			"residentState": "WY",
			"totalAssets": "294250.8"
	},
	{
			"firstName": "KOHLMEM",
			"ipAddress": "10.101.29.94",
			"lastName": "NKII-WAOOWMN",
			"participantAge": 74,
			"participantId": "2328969",
			"residentState": "CO",
			"totalAssets": "34905.87"
	},
	{
			"firstName": "AEEAMAEMUUM",
			"ipAddress": "10.101.29.94",
			"lastName": "PNMME",
			"participantAge": 51,
			"participantId": "2346682",
			"residentState": "IL",
			"totalAssets": "22461.06"
	},
	{
			"firstName": "HANPANMU",
			"ipAddress": "10.101.29.199",
			"lastName": "HK PNMPKN",
			"participantAge": 58,
			"participantId": "1477472",
			"residentState": "IL",
			"totalAssets": "206271.17"
	},
	{
			"firstName": "IKWA",
			"ipAddress": "10.104.109.241",
			"lastName": "AKUAEEMI-NNWMLHAE",
			"participantAge": 55,
			"participantId": "1928388",
			"residentState": "CA",
			"totalAssets": "169713.06"
	},
	{
			"firstName": "LAEEH MANO",
			"ipAddress": "10.101.37.70",
			"lastName": "UPHHANL",
			"participantAge": 57,
			"participantId": "1605592",
			"residentState": "LA",
			"totalAssets": "201915.02"
	}
  ],
  message: {},
	loading: false,
	showList: false,
	showDetail: false,
  payload_arrived: false
}

export default initState;