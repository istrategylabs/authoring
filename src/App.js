import React, { Component } from 'react';
import Preview from './components/Preview';
import FloatingUI from './components/FloatingUI';

class App extends Component {

  state = {
    data: {
      "document": {
          "type": "APL",
          "version": "1.0",
          "theme": "dark",
          "import": [
              {
                  "name": "alexa-layouts",
                  "version": "1.0.0"
              }
          ],
          "resources": [
              {
                  "description": "Stock color for the light theme",
                  "colors": {
                      "colorTextPrimary": "#151920"
                  }
              },
              {
                  "description": "Stock color for the dark theme",
                  "when": "${viewport.theme == 'dark'}",
                  "colors": {
                      "colorTextPrimary": "#f0f1ef"
                  }
              },
              {
                  "description": "Standard font sizes",
                  "dimensions": {
                      "textSizeBody": 48,
                      "textSizePrimary": 27,
                      "textSizeSecondary": 23,
                      "textSizeSecondaryHint": 25
                  }
              },
              {
                  "description": "Common spacing values",
                  "dimensions": {
                      "spacingThin": 6,
                      "spacingSmall": 12,
                      "spacingMedium": 24,
                      "spacingLarge": 48,
                      "spacingExtraLarge": 72
                  }
              },
              {
                  "description": "Common margins and padding",
                  "dimensions": {
                      "marginTop": 40,
                      "marginLeft": 60,
                      "marginRight": 60,
                      "marginBottom": 40
                  }
              }
          ],
          "styles": {
              "textStyleBase": {
                  "description": "Base font description; set color and core font family",
                  "values": [
                      {
                          "color": "@colorTextPrimary",
                          "fontFamily": "Amazon Ember"
                      }
                  ]
              },
              "textStyleBase0": {
                  "description": "Thin version of basic font",
                  "extend": "textStyleBase",
                  "values": {
                      "fontWeight": "100"
                  }
              },
              "textStyleBase1": {
                  "description": "Light version of basic font",
                  "extend": "textStyleBase",
                  "values": {
                      "fontWeight": "300"
                  }
              },
              "mixinBody": {
                  "values": {
                      "fontSize": "@textSizeBody"
                  }
              },
              "mixinPrimary": {
                  "values": {
                      "fontSize": "@textSizePrimary"
                  }
              },
              "mixinSecondary": {
                  "values": {
                      "fontSize": "@textSizeSecondary"
                  }
              },
              "textStylePrimary": {
                  "extend": [
                      "textStyleBase1",
                      "mixinPrimary"
                  ]
              },
              "textStyleSecondary": {
                  "extend": [
                      "textStyleBase0",
                      "mixinSecondary"
                  ]
              },
              "textStyleBody": {
                  "extend": [
                      "textStyleBase1",
                      "mixinBody"
                  ]
              },
              "textStyleSecondaryHint": {
                  "values": {
                      "fontFamily": "Bookerly",
                      "fontStyle": "italic",
                      "fontSize": "@textSizeSecondaryHint",
                      "color": "@colorTextPrimary"
                  }
              }
          },
          "layouts": {},
          "mainTemplate": {
              "parameters": [
                  "payload"
              ],
              "items": [
                  {
                      "type": "Container",
                      "width": "100vw",
                      "height": "100vh",
                      "items": [
                          {
                              "type": "Image",
                              "source": "${payload.bodyTemplate2Data.backgroundImage.sources[0].url}",
                              "scale": "best-fill",
                              "width": "100vw",
                              "height": "100vh",
                              "position": "absolute"
                          },
                          {
                              "type": "AlexaHeader",
                              "headerTitle": "${payload.bodyTemplate2Data.title}",
                              "headerAttributionImage": "${payload.bodyTemplate2Data.logoUrl}"
                          },
                          {
                              "type": "Container",
                              "direction": "row",
                              "paddingLeft": "60dp",
                              "paddingRight": "72dp",
                              "grow": 1,
                              "shrink": 1,
                              "items": [
                                  {
                                      "type": "ScrollView",
                                      "scrollDirection": "vertical",
                                      "grow": 1,
                                      "shrink": 1,
                                      "item": {
                                          "type": "Container",
                                          "items": [
                                              {
                                                  "type": "Text",
                                                  "text": "<b>Food pairings</b> | <b>Wine pairings</b>",
                                                  "style": "textStylePrimary",
                                                  "color": "#4dd2ff"
                                              },
                                              {
                                                  "type": "Text",
                                                  "text": "<b>${payload.bodyTemplate2Data.textContent.title.text}</b>",
                                                  "style": "textStyleBody"
                                              },
                                              {
                                                  "type": "Text",
                                                  "text": "${payload.bodyTemplate2Data.textContent.subtitle.text}",
                                                  "style": "textStylePrimary"
                                              },
                                              {
                                                  "type": "Text",
                                                  "text": "${payload.bodyTemplate2Data.textContent.primaryText.text}",
                                                  "spacing": "@spacingSmall",
                                                  "paddingTop": "40dp",
                                                  "paddingRight": "70dp",
                                                  "style": "textStylePrimary"
                                              }
                                          ]
                                      }
                                  },
                                  {
                                      "type": "Image",
                                      "source": "${payload.bodyTemplate2Data.image.sources[0].url}",
                                      "width": 340,
                                      "height": 384,
                                      "scale": "best-fit",
                                      "align": "center"
                                  }
                              ]
                          },
                          {
                              "type": "AlexaFooter",
                              "footerHint": "${payload.bodyTemplate2Data.hintText}"
                          }
                      ]
                  }
              ]
          }
      },
      "dataSources": {
          "bodyTemplate2Data": {
              "type": "object",
              "objectId": "bt2Sample",
              "backgroundImage": {
                  "contentDescription": null,
                  "smallSourceUrl": null,
                  "largeSourceUrl": null,
                  "sources": [
                      {
                          "url": "https://d2o906d8ln7ui1.cloudfront.net/images/BT2_Background.png",
                          "size": "small",
                          "widthPixels": 0,
                          "heightPixels": 0
                      },
                      {
                          "url": "https://d2o906d8ln7ui1.cloudfront.net/images/BT2_Background.png",
                          "size": "large",
                          "widthPixels": 0,
                          "heightPixels": 0
                      }
                  ]
              },
              "title": "Parmigiano Reggiano",
              "image": {
                  "contentDescription": null,
                  "smallSourceUrl": null,
                  "largeSourceUrl": null,
                  "sources": [
                      {
                          "url": "https://d2o906d8ln7ui1.cloudfront.net/images/details_01.png",
                          "size": "small",
                          "widthPixels": 0,
                          "heightPixels": 0
                      },
                      {
                          "url": "https://d2o906d8ln7ui1.cloudfront.net/images/details_01.png",
                          "size": "large",
                          "widthPixels": 0,
                          "heightPixels": 0
                      }
                  ]
              },
              "textContent": {
                  "title": {
                      "type": "PlainText",
                      "text": "Parmigiano Reggiano"
                  },
                  "subtitle": {
                      "type": "PlainText",
                      "text": "Country of origin: Italy"
                  },
                  "primaryText": {
                      "type": "PlainText",
                      "text": "Parmesan cheese is made from unpasteurized milk. It has a hard, gritty texture, and is fruity and nutty in taste."
                  }
              },
              "logoUrl": "https://d2o906d8ln7ui1.cloudfront.net/images/cheeseskillicon.png",
              "hintText": "Try, \"Alexa, give me a fact about cheese\""
          }
      }
  }
}

  render() {
    const { data } = this.state;
    return <div className="App">
      <Preview data={data} update={data => this.setState({ data })} />
      {/* <FloatingUI data={data} update={data => this.setState({ data })} /> */}
    </div>;
  }
}

export default App;
