const initState = {
  query: "",
  refID: [], //used from participantID
  accounts: [
    {
			"firstName": "Anand",
			"ipAddress": "81.177.139.181",
			"ipFraudScore": "95",
			"ipGeographicState": "NY",
			"ipLocation": "Russia",
			"ipMismatch": "Yes",
			"lastName": "Nagarajan",
			"participantAge": 71,
			"participantId": "1211212",
			"residentState": "CA",
			"riskScore": "Dummy for now",
			"totalAssets": 192444.72
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
			"participantId": "1211212",
			"residentState": "CA",
			"riskScore": "Dummy for now",
			"totalAssets": 192444.72
		}
  ],
  message: {},
  loading: false,
  payload_arrived: false
}

export default initState;