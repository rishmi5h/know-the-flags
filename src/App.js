import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🇦🇨": "Ascension Island",
  "🇦🇩": "Andorra",
  "🇦🇪": "United Arab Emirates",
  "🇦🇫": "Afghanistan",
  "🇦🇬": "Antigua & Barbuda",
  "🇦🇮": "Anguilla",
  "🇦🇱": "Albania",
  "🇦🇲": "Armenia",
  "🇦🇴": "Angola",
  "🇦🇶": "Antarctica",
  "🇦🇷": "Argentina",
  "🇦🇸": "American Samoa",
  "🇦🇹": "Austria",
  "🇦🇺": "Australia",
  "🇦🇼": "Aruba",
  "🇦🇽": "Åland Islands",
  "🇦🇿": "Azerbaijan",
  "🇧🇦": "Bosnia & Herzegovina",
  "🇧🇧": "Barbados",
  "🇧🇩": "Bangladesh",
  "🇧🇪": "Belgium",
  "🇧🇫": "Burkina Faso",
  "🇧🇬": "Bulgaria",
  "🇧🇭": "Bahrain",
  "🇧🇮": "Burundi",
  "🇧🇯": "Benin",
  "🇧🇱": "St. Barthélemy",
  "🇧🇲": "Bermuda",
  "🇧🇳": "Brunei",
  "🇧🇴": "Bolivia",
  "🇧🇶": "Caribbean Netherlands",
  "🇧🇷": "Brazil",
  "🇧🇸": "Bahamas",
  "🇧🇹": "Bhutan",
  "🇧🇻": "Bouvet Island",
  "🇧🇼": "Botswana",
  "🇧🇾": "Belarus",
  "🇧🇿": "Belize",
  "🇨🇦": "Canada",
  "🇨🇨": "Cocos (Keeling) Islands",
  "🇨🇩": "Congo - Kinshasa",
  "🇨🇫": "Central African Republic",
  "🇨🇬": "Congo - Brazzaville",
  "🇨🇭": "Switzerland",
  "🇨🇮": "Côte d’Ivoire",
  "🇨🇰": "Cook Islands",
  "🇨🇱": "Chile",
  "🇨🇲": "Cameroon",
  "🇨🇳": "China",
  "🇨🇴": "Colombia",
  "🇨🇵": "Clipperton Island",
  "🇨🇷": "Costa Rica",
  "🇨🇺": "Cuba",
  "🇨🇻": "Cape Verde",
  "🇨🇼": "Curaçao",
  "🇨🇽": "Christmas Island",
  "🇨🇾": "Cyprus",
  "🇨🇿": "Czechia",
  "🇩🇪": "Germany",
  "🇩🇬": "Diego Garcia",
  "🇩🇯": "Djibouti",
  "🇩🇰": "Denmark",
  "🇩🇲": "Dominica",
  "🇩🇴": "Dominican Republic",
  "🇩🇿": "Algeria",
  "🇪🇦": "Ceuta & Melilla",
  "🇪🇨": "Ecuador",
  "🇪🇪": "Estonia",
  "🇪🇬": "Egypt",
  "🇪🇭": "Western Sahara",
  "🇪🇷": "Eritrea",
  "🇪🇸": "Spain",
  "🇪🇹": "Ethiopia",
  "🇪🇺": "European Union",
  "🇫🇮": "Finland",
  "🇫🇯": "Fiji",
  "🇫🇰": "Falkland Islands",
  "🇫🇲": "Micronesia",
  "🇫🇴": "Faroe Islands",
  "🇫🇷": "France",
  "🇬🇦": "Gabon",
  "🇬🇧": "United Kingdom",
  "🇬🇩": "Grenada",
  "🇬🇪": "Georgia",
  "🇬🇫": "French Guiana",
  "🇬🇬": "Guernsey",
  "🇬🇭": "Ghana",
  "🇬🇮": "Gibraltar",
  "🇬🇱": "Greenland",
  "🇬🇲": "Gambia",
  "🇬🇳": "Guinea",
  "🇬🇵": "Guadeloupe",
  "🇬🇶": "Equatorial Guinea",
  "🇬🇷": "Greece",
  "🇬🇸": "South Georgia & South Sandwich Islands",
  "🇬🇹": "Guatemala",
  "🇬🇺": "Guam",
  "🇬🇼": "Guinea-Bissau",
  "🇬🇾": "Guyana",
  "🇭🇰": "Hong Kong SAR China",
  "🇭🇲": "Heard & McDonald Islands",
  "🇭🇳": "Honduras",
  "🇭🇷": "Croatia",
  "🇭🇹": "Haiti",
  "🇭🇺": "Hungary",
  "🇮🇨": "Canary Islands",
  "🇮🇩": "Indonesia",
  "🇮🇪": "Ireland",
  "🇮🇱": "Israel",
  "🇮🇲": "Isle of Man",
  "🇮🇳": "India",
  "🇮🇴": "British Indian Ocean Territory",
  "🇮🇶": "Iraq",
  "🇮🇷": "Iran",
  "🇮🇸": "Iceland",
  "🇮🇹": "Italy",
  "🇯🇪": "Jersey",
  "🇯🇲": "Jamaica",
  "🇯🇴": "Jordan",
  "🇯🇵": "Japan",
  "🇰🇪": "Kenya",
  "🇰🇬": "Kyrgyzstan",
  "🇰🇭": "Cambodia",
  "🇰🇮": "Kiribati",
  "🇰🇲": "Comoros",
  "🇰🇳": "St. Kitts & Nevis",
  "🇰🇵": "North Korea",
  "🇰🇷": "South Korea",
  "🇰🇼": "Kuwait",
  "🇰🇾": "Cayman Islands",
  "🇰🇿": "Kazakhstan",
  "🇱🇦": "Laos",
  "🇱🇧": "Lebanon",
  "🇱🇨": "St. Lucia",
  "🇱🇮": "Liechtenstein",
  "🇱🇰": "Sri Lanka",
  "🇱🇷": "Liberia",
  "🇱🇸": "Lesotho",
  "🇱🇹": "Lithuania",
  "🇱🇺": "Luxembourg",
  "🇱🇻": "Latvia",
  "🇱🇾": "Libya",
  "🇲🇦": "Morocco",
  "🇲🇨": "Monaco",
  "🇲🇩": "Moldova",
  "🇲🇪": "Montenegro",
  "🇲🇫": "St. Martin",
  "🇲🇬": "Madagascar",
  "🇲🇭": "Marshall Islands",
  "🇲🇰": "North Macedonia",
  "🇲🇱": "Mali",
  "🇲🇲": "Myanmar (Burma)",
  "🇲🇳": "Mongolia",
  "🇲🇴": "Macao Sar China",
  "🇲🇵": "Northern Mariana Islands",
  "🇲🇶": "Martinique",
  "🇲🇷": "Mauritania",
  "🇲🇸": "Montserrat",
  "🇲🇹": "Malta",
  "🇲🇺": "Mauritius",
  "🇲🇻": "Maldives",
  "🇲🇼": "Malawi",
  "🇲🇽": "Mexico",
  "🇲🇾": "Malaysia",
  "🇲🇿": "Mozambique",
  "🇳🇦": "Namibia",
  "🇳🇨": "New Caledonia",
  "🇳🇪": "Niger",
  "🇳🇫": "Norfolk Island",
  "🇳🇬": "Nigeria",
  "🇳🇮": "Nicaragua",
  "🇳🇱": "Netherlands",
  "🇳🇴": "Norway",
  "🇳🇵": "Nepal",
  "🇳🇷": "Nauru",
  "🇳🇺": "Niue",
  "🇳🇿": "New Zealand",
  "🇴🇲": "Oman",
  "🇵🇦": "Panama",
  "🇵🇪": "Peru",
  "🇵🇫": "French Polynesia",
  "🇵🇬": "Papua New Guinea",
  "🇵🇭": "Philippines",
  "🇵🇰": "Pakistan",
  "🇵🇱": "Poland",
  "🇵🇲": "St. Pierre & Miquelon",
  "🇵🇳": "Pitcairn Islands",
  "🇵🇷": "Puerto Rico",
  "🇵🇸": "Palestinian Territories",
  "🇵🇹": "Portugal",
  "🇵🇼": "Palau",
  "🇵🇾": "Paraguay",
  "🇶🇦": "Qatar",
  "🇷🇪": "Réunion",
  "🇷🇴": "Romania",
  "🇷🇸": "Serbia",
  "🇷🇺": "Russia",
  "🇷🇼": "Rwanda",
  "🇸🇦": "Saudi Arabia",
  "🇸🇧": "Solomon Islands",
  "🇸🇨": "Seychelles",
  "🇸🇩": "Sudan",
  "🇸🇪": "Sweden",
  "🇸🇬": "Singapore",
  "🇸🇭": "St. Helena",
  "🇸🇮": "Slovenia",
  "🇸🇯": "Svalbard & Jan Mayen",
  "🇸🇰": "Slovakia",
  "🇸🇱": "Sierra Leone",
  "🇸🇲": "San Marino",
  "🇸🇳": "Senegal",
  "🇸🇴": "Somalia",
  "🇸🇷": "Suriname",
  "🇸🇸": "South Sudan",
  "🇸🇹": "São Tomé & Príncipe",
  "🇸🇻": "El Salvador",
  "🇸🇽": "Sint Maarten",
  "🇸🇾": "Syria",
  "🇸🇿": "Eswatini",
  "🇹🇦": "Tristan Da Cunha",
  "🇹🇨": "Turks & Caicos Islands",
  "🇹🇩": "Chad",
  "🇹🇫": "French Southern Territories",
  "🇹🇬": "Togo",
  "🇹🇭": "Thailand",
  "🇹🇯": "Tajikistan",
  "🇹🇰": "Tokelau",
  "🇹🇱": "Timor-Leste",
  "🇹🇲": "Turkmenistan",
  "🇹🇳": "Tunisia",
  "🇹🇴": "Tonga",
  "🇹🇷": "Turkey",
  "🇹🇹": "Trinidad & Tobago",
  "🇹🇻": "Tuvalu",
  "🇹🇼": "Taiwan",
  "🇹🇿": "Tanzania",
  "🇺🇦": "Ukraine",
  "🇺🇬": "Uganda",
  "🇺🇲": "U.S. Outlying Islands",
  "🇺🇳": "United Nations",
  "🇺🇸": "United States",
  "🇺🇾": "Uruguay",
  "🇺🇿": "Uzbekistan",
  "🇻🇦": "Vatican City",
  "🇻🇨": "St. Vincent & Grenadines",
  "🇻🇪": "Venezuela",
  "🇻🇬": "British Virgin Islands",
  "🇻🇮": "U.S. Virgin Islands",
  "🇻🇳": "Vietnam",
  "🇻🇺": "Vanuatu",
  "🇼🇫": "Wallis & Futuna",
  "🇼🇸": "Samoa",
  "🇽🇰": "Kosovo",
  "🇾🇪": "Yemen",
  "🇾🇹": "Mayotte",
  "🇿🇦": "South Africa",
  "🇿🇲": "Zambia",
  "🇿🇼": "Zimbabwe",
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳️": "White Flag",
  "🏳️‍🌈": "Rainbow Flag",
  "🏴‍☠️": "Pirate Flag",
  "🏴󠁧󠁢󠁥󠁮󠁧󠁿": "England",
  "🏴󠁧󠁢󠁳󠁣󠁴󠁿": "Scotland",
  "🏴󠁧󠁢󠁷󠁬󠁳󠁿": "Wales",
  "🏳️‍⚧️": "Transgender Flag",
  "": "",
};

var knownFlags = Object.keys(flagDictionary);
export default function App() {
  var [userInput, setUserInput] = useState("");
  var [meaning, setMeaning] = useState("");

  function inputText(event) {
    var imojiInput = event.target.value;

    if (imojiInput in flagDictionary) {
      setUserInput(imojiInput);
      setMeaning(flagDictionary[imojiInput]);
    } else {
      setUserInput("Not in our Database");
    }
  }

  function emojiClickHandler(emoji) {
    setMeaning(flagDictionary[emoji]);
  }
  return (
    <div className='App'>
      <header>
        <h1> Know the Flags</h1>
      </header>
      <div className='stick'>
        <input
          placeholder='Enter flag emoji here or click on any flag'
          onChange={inputText}
        ></input>
        <h3>{userInput}</h3>
        <h3>{meaning}</h3>
      </div>

      <div className='flagParent'>
        {knownFlags.map((emoji) => {
          return (
            <span
              className='flagss'
              onClick={() => emojiClickHandler(emoji)}
              key={emoji}
              style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
            >
              {emoji}
            </span>
          );
        })}
      </div>

      <footer>
        Made with ❤️ by <a href='https://github.com/rishmi5h'>@rishmi5h</a>
      </footer>
    </div>
  );
}
