const getData = require('./server');
const axios = require('axios');

jest.mock('axios');


// Test the getData function for the Chicago O'Hare International Airport
// Expect to receive an object with Departures and Arrivals
describe('getData', () => {
  it('should return an object with Departures and Arrivals', async () => {
    const apt = 'KORD';
    const mockData = {
      data: {
        KORD: {
          Departures: [ {
            "callsign": "AAL1963",
            "cid": 1435979,
            "name": "John Griffith KILM",
            "latitude": "41.94757",
            "longitude": "-86.93420",
            "altitude": "22719",
            "ground_speed": "459",
            "heading": 89,
            "transponder": 1363,
            "aircraft": "H/B763/L",
            "departure": "KORD",
            "nm_from_dep": "43.35",
            "arrival": "KPIT",
            "nm_from_arr": "314.73",
            "alternate": "KDTW",
            "route": "+ORD5 MOBLE ADIME OTENS ANEWA LNDOR ACO JESEY4",
            "flight_rules": "IFR",
            "filed_altitude": "37000",
            "filed_tas": "448",
            "filed_time_enroute": "1:0",
            "filed_fuel_onboard": "3:5",
            "remarks": "/v//L NAV/GPSRNAV",
            "stage_of_flight": "Climb",
            "time_logon": "2020-03-02 19:08:42"
        },
        {
            "callsign": "UAL1067",
            "cid": 924137,
            "name": "Bill Barrette KLAX",
            "latitude": "41.94236",
            "longitude": "-88.01773",
            "altitude": "3886",
            "ground_speed": "231",
            "heading": 245,
            "transponder": 1327,
            "aircraft": "H/A319/L",
            "departure": "KORD",
            "nm_from_dep": "5.49",
            "arrival": "KMTJ",
            "nm_from_arr": "931.32",
            "alternate": "KDEN",
            "route": "+ORD5 PEKUE PIPPN ROTTN PWE HLC PUB MTJ",
            "flight_rules": "IFR",
            "filed_altitude": "36000",
            "filed_tas": "450",
            "filed_time_enroute": "3:30",
            "filed_fuel_onboard": "4:30",
            "remarks": "united-virtual.com/xplane 11/xpilot/Toliss /v/ SEL/FMLP",
            "stage_of_flight": "Climb",
            "time_logon": "2020-03-02 19:08:42"
        },
        {
            "callsign": "UAL1836",
            "cid": 1424796,
            "name": "joel drezdner KJFK",
            "latitude": "42.11993",
            "longitude": "-88.63723",
            "altitude": "14051",
            "ground_speed": "314",
            "heading": 298,
            "transponder": 1370,
            "aircraft": "A320/L",
            "departure": "KORD",
            "nm_from_dep": "33.72",
            "arrival": "KLAX",
            "nm_from_arr": "1481.21",
            "alternate": "KONT",
            "route": "+ORD5 MYKIE MONNY IANNA FOD J94 ONL J148 CYS EKR J100 SAKES PROMT Q88 HAKMN ANJLL4",
            "flight_rules": "IFR",
            "filed_altitude": "36000",
            "filed_tas": "444",
            "filed_time_enroute": "3:46",
            "filed_fuel_onboard": "4:56",
            "remarks": "PBN/A1B1C1D1O1S1 DOF/200302 REG/N320SB EET/KZMP0040 KZDV0121 KZLC0232 KZLA0250 OPR/UAL PER/C RMK/TCAS SIMBRIEF /v/ SEL/FKPS",
            "stage_of_flight": "Climb",
            "time_logon": "2020-03-02 19:08:42"
        },
        {
            "callsign": "UAL8511",
            "cid": 1325316,
            "name": "nathan conrad KIAH",
            "latitude": "51.47460",
            "longitude": "-0.45148",
            "altitude": "93",
            "ground_speed": "0",
            "heading": 180,
            "transponder": 2000,
            "aircraft": "A21N",
            "departure": "KORD",
            "nm_from_dep": "3423.55",
            "arrival": "KDFW",
            "nm_from_arr": "4116.18",
            "alternate": "KSAT",
            "route": "+JOT PIA MAGOO SGF RZC JONEZ",
            "flight_rules": "IFR",
            "filed_altitude": "34000",
            "filed_tas": "280",
            "filed_time_enroute": "2:4",
            "filed_fuel_onboard": "3:19",
            "remarks": "  /v/",
            "stage_of_flight": "Parked",
            "time_logon": "2020-03-02 19:19:25"
        },
        {
            "callsign": "UAL944",
            "cid": 1444258,
            "name": "Ethan Kostival KDEN",
            "latitude": "43.66290",
            "longitude": "-86.30068",
            "altitude": "34120",
            "ground_speed": "487",
            "heading": 45,
            "transponder": 1334,
            "aircraft": "H/B789/L",
            "departure": "KORD",
            "nm_from_dep": "123.28",
            "arrival": "EDDF",
            "nm_from_arr": "3640.69",
            "alternate": "NONE",
            "route": "+ORD5 RAYNR BRTMN TAAYZ PECOK ASP YBG YBC RIKAL BEXET MORAG KONAN UL607 KOK REMBA UL607 SPI T180 RASVO T180 UNOKO UNOK2B",
            "flight_rules": "IFR",
            "filed_altitude": "37000",
            "filed_tas": "280",
            "filed_time_enroute": "8:0",
            "filed_fuel_onboard": "9:0",
            "remarks": " /v/",
            "stage_of_flight": "Climb",
            "time_logon": "2020-03-02 19:08:42"
        }],
          Arrivals: [ {
            "callsign": "AAL38",
            "cid": 1479190,
            "name": "Raymond Cui KDFW",
            "latitude": "42.80231",
            "longitude": "-85.35738",
            "altitude": "33445",
            "ground_speed": "404",
            "heading": 261,
            "transponder": 1301,
            "aircraft": "B738/L",
            "departure": "KEWR",
            "nm_from_dep": "516.22",
            "arrival": "KORD",
            "nm_from_arr": "123.23",
            "alternate": "NONE",
            "route": "+ PORTT4 PORTT COATE Q436 EMMMA WYNDE8",
            "flight_rules": "IFR",
            "filed_altitude": "34000",
            "filed_tas": "260",
            "filed_time_enroute": "2:50",
            "filed_fuel_onboard": "4:0",
            "remarks": " /v/ SEL/ABCD ",
            "stage_of_flight": "Cruise",
            "time_logon": "2020-03-02 19:08:42"
        },
        {
            "callsign": "DAL2450",
            "cid": 1401169,
            "name": "joseph Litz KIND",
            "latitude": "39.87598",
            "longitude": "-85.37941",
            "altitude": "29824",
            "ground_speed": "392",
            "heading": 332,
            "transponder": 1200,
            "aircraft": "B738",
            "departure": "KSAV",
            "nm_from_dep": "507.07",
            "arrival": "KORD",
            "nm_from_arr": "170.35",
            "alternate": "KIND",
            "route": "SMALZ MILEN QUIWE DOOGE Q63 HEVAN MZZ VEECK4",
            "flight_rules": "IFR",
            "filed_altitude": "30000",
            "filed_tas": "500",
            "filed_time_enroute": "2:0",
            "filed_fuel_onboard": "0:0",
            "remarks": " /v/ SEL/QRAF",
            "stage_of_flight": "Cruise",
            "time_logon": "2020-03-02 19:11:39"
        },
        {
            "callsign": "SAS943",
            "cid": 1412593,
            "name": "Kristoffer Kile ENGM",
            "latitude": "41.97508",
            "longitude": "-87.89240",
            "altitude": "686",
            "ground_speed": "0",
            "heading": 88,
            "transponder": 1346,
            "aircraft": "A333/L",
            "departure": "EKCH",
            "nm_from_dep": "3698.33",
            "arrival": "KORD",
            "nm_from_arr": "0.59",
            "alternate": "KDTW",
            "route": "+ODN DCT VAXIT UN581 VADNO DCT ERAKA/M081F370 NATA 57N050W/N0470F370 NATA HOIST/N0467F380 N604B OMTOL/N0469F400 N584B MT J545 YVO DCT DUTEL Q923 KARIT Q848 HHIPP WYNDE1",
            "flight_rules": "IFR",
            "filed_altitude": "36000",
            "filed_tas": "480",
            "filed_time_enroute": "9:9",
            "filed_fuel_onboard": "11:13",
            "remarks": " /v/",
            "stage_of_flight": "Parked",
            "time_logon": "2020-03-02 19:08:42"
        },
        {
            "callsign": "SWR8",
            "cid": 1183742,
            "name": "Mario Peheim LOWG",
            "latitude": "42.10303",
            "longitude": "-87.41015",
            "altitude": "5858",
            "ground_speed": "230",
            "heading": 185,
            "transponder": 1333,
            "aircraft": "H/A333",
            "departure": "LSZH",
            "nm_from_dep": "3826.74",
            "arrival": "KORD",
            "nm_from_arr": "23.27",
            "alternate": "KRFD",
            "route": "VEBIT T51 LASUN UN176 LUMEL T10 TORPA V40 LUL UL613 SOVAT L613 TLA L602 GOW DCT ERAKA NATA HOIST N604B OMTOL N584B MT DCT TVC WYNDE1",
            "flight_rules": "IFR",
            "filed_altitude": "FL340",
            "filed_tas": "423",
            "filed_time_enroute": "9:22",
            "filed_fuel_onboard": "10:49",
            "remarks": "+VFPS+/V/PBN/A1B1C1D1L1O1S2T1 NAV/RNVD1E2A1 DOF/200302 REG/A330 EET/LSAC0011 LFEE0014 LFFF0020 EGTT0055 EGPX0133 ERAKA0212 EGGX0212 60N020W0255 CZQX0334 59N040W0415 57N050W0502 HOIST0539 CZUL0620 OMTOL0701 CZYZ0753 KZMP0824 KZAU0848 RVR/75 PER/D RALT/BIKF",
            "stage_of_flight": "Descent",
            "time_logon": "2020-03-02 19:08:42"
        }]
        }
      }
    };

    axios.get.mockResolvedValueOnce(mockData);
    const result = await getData(apt);
    console.log(result);
    // Chicago O'Hare International Airport
    // FAA code is ORG
    // iCAO code is KORD
    expect(result.data).toHaveProperty('KORD');
    expect(result.data.KORD).toHaveProperty('Departures');
    expect(Array.isArray(result.data.KORD.Departures)).toBe(true);
    expect(result.data.KORD).toHaveProperty('Arrivals');
    expect(Array.isArray(result.data.KORD.Arrivals)).toBe(true);
  });

});
