import info from '../../../data/general.json';
import { BriefGeneral } from "./BriefGeneral/BriefGeneral";
import { ButtonsBuyGeneral } from "./ButtonsBuyGeneral/ButtonsBuyGeneral";
import { useProduct } from "../../../redux/hooks/usePeoduct";
import { useAppSelector } from "../../../redux/hooks";
import ReviewCardSpecifications from "../ReviewsQuestion/ReviewCardSpecifications";
import { DeviceIdState } from "../../../redux/types/initialEntity";
import {
    GeneralContainer,
    BriefWrap
} from "./General.styled";

const General = () => {
    const { currentProduct } = useProduct();

    const product = useAppSelector((state) => {
        return state.products.product;
      });

    console.log(currentProduct);

//     const sameInternalMemory =  [
//         {
//             "id": "abc10",
//             "memory": "128 GB"
//         },
//         {
//             "id": "abc11",
//             "memory": "256 GB"
//         },
//         {
//         "id": "abc12",
//         "memory": "512 GB"
//     }, 
//     {
//         "id": "abc13",
//         "memory": "1 T"
//     }
// ]
const internalMemory = info.map(({ sameInternalMemory }) => {
    return sameInternalMemory;
})
console.log(internalMemory)

let device: DeviceIdState | undefined;
if (product) {
  device = product;
}

    return (
        <GeneralContainer>
     
            <BriefWrap>
            <BriefGeneral />
            <ButtonsBuyGeneral />
          </BriefWrap>
        <ReviewCardSpecifications device={device} />
        </GeneralContainer>
    )
}
export default General;


// {
//     "id": "65959d7ff7c4ae3dcdcd5a3d",
//     "title": "Apple Iphone 14 pro max 512 GB Deap Purple (IP14PM512DP)",
//     "price": 69999,
//     "discount": 8,
//     "sameDevices": [],
//     "sameMemories": [
//         {
//             "id": "6595a351cb91ce11f98cbe17",
//             "value": "Blue"
//         },
//         {
//             "id": "6595a397fc130a24edf319a0",
//             "value": "Red"
//         }
//     ],
//     "photoUris": [
//         "1",
//         "2",
//         "3"
//     ],
//     "presentation": null,
//     "specificationGroups": [
//         {
//             "title": "Main",
//             "specifications": [
//                 {
//                     "title": "Series",
//                     "value": "Iphone 14 pro max",
//                     "descriptionExtra": null,
//                     "main": true
//                 },
//                 {
//                     "title": "Graduation year",
//                     "value": "2022",
//                     "descriptionExtra": null,
//                     "main": true
//                 },
//                 {
//                     "title": "Color",
//                     "value": "Deap Purple",
//                     "descriptionExtra": null,
//                     "main": true
//                 }
//             ]
//         },
//         {
//             "title": "Operating System",
//             "specifications": [
//                 {
//                     "title": "Operating system",
//                     "value": "iOS 16",
//                     "descriptionExtra": null,
//                     "main": true
//                 }
//             ]
//         },
//         {
//             "title": "Memory",
//             "specifications": [
//                 {
//                     "title": "Internal memory",
//                     "value": "512 GB",
//                     "descriptionExtra": null,
//                     "main": true
//                 },
//                 {
//                     "title": "RAM",
//                     "value": "6 GB",
//                     "descriptionExtra": null,
//                     "main": false
//                 },
//                 {
//                     "title": "The maximum volume of supported memory card",
//                     "value": "None",
//                     "descriptionExtra": null,
//                     "main": false
//                 }
//             ]
//         },
//         {
//             "title": "Display",
//             "specifications": [
//                 {
//                     "title": "Screen diagonal",
//                     "value": "6,7\"",
//                     "descriptionExtra": null,
//                     "main": true
//                 },
//                 {
//                     "title": "Display resolution",
//                     "value": "2796x1290",
//                     "descriptionExtra": "Some description",
//                     "main": false
//                 },
//                 {
//                     "title": "Matrix type",
//                     "value": "OLED (Super retina XDR)",
//                     "descriptionExtra": "Some text",
//                     "main": false
//                 },
//                 {
//                     "title": "Screen refresh rate",
//                     "value": "120 Hz",
//                     "descriptionExtra": null,
//                     "main": false
//                 },
//                 {
//                     "title": "Screen material",
//                     "value": "Ceramic Shield",
//                     "descriptionExtra": null,
//                     "main": false
//                 }
//             ]
//         },
//         {
//             "title": "Processor",
//             "specifications": [
//                 {
//                     "title": "Processor",
//                     "value": "Apple A16 Bionic",
//                     "descriptionExtra": null,
//                     "main": false
//                 },
//                 {
//                     "title": "Number of cores",
//                     "value": "6",
//                     "descriptionExtra": null,
//                     "main": true
//                 },
//                 {
//                     "title": "Apple Series",
//                     "value": "Apple Ax Series",
//                     "descriptionExtra": null,
//                     "main": false
//                 }
//             ]
//         },
//         {
//             "title": "Communication standard/Internet",
//             "specifications": [
//                 {
//                     "title": "Communication standart",
//                     "value": "2G (GPRS/EDGE)\n3G (WCDMA/UTMS/HSPA)\n4G (LTE)\n5G",
//                     "descriptionExtra": null,
//                     "main": false
//                 }
//             ]
//         },
//         {
//             "title": "SIM Cards",
//             "specifications": [
//                 {
//                     "title": "Number of SIM cards",
//                     "value": "2",
//                     "descriptionExtra": null,
//                     "main": false
//                 },
//                 {
//                     "title": "Size of SIM card",
//                     "value": "Nano SIM",
//                     "descriptionExtra": null,
//                     "main": false
//                 }
//             ]
//         },
//         {
//             "title": "Main camera",
//             "specifications": [
//                 {
//                     "title": "Main camera",
//                     "value": "48 MP, 12 MP, 12 MP",
//                     "descriptionExtra": null,
//                     "main": true
//                 },
//                 {
//                     "title": "Main camera features",
//                     "value": "Auto focus\nSuport for shooting 4K\nFlash\nStabilization\nTelephoto lens\nUltra wide angle lens",
//                     "descriptionExtra": null,
//                     "main": false
//                 },
//                 {
//                     "title": "Number of main cameras",
//                     "value": "3",
//                     "descriptionExtra": null,
//                     "main": false
//                 },
//                 {
//                     "title": "Main camera video recording",
//                     "value": "4K (3840*2160, Stereo sound)",
//                     "descriptionExtra": null,
//                     "main": false
//                 },
//                 {
//                     "title": "Stabilization",
//                     "value": "Optical",
//                     "descriptionExtra": null,
//                     "main": false
//                 }
//             ]
//         },
//         {
//             "title": "Front camera",
//             "specifications": [
//                 {
//                     "title": "Front camera",
//                     "value": "12 MP",
//                     "descriptionExtra": null,
//                     "main": false
//                 },
//                 {
//                     "title": "Front camera features",
//                     "value": "Auto focus\nSingle camera\nSuport for shotting 4K\nStabilization\nFront flash",
//                     "descriptionExtra": null,
//                     "main": false
//                 },
//                 {
//                     "title": "Front camera placement",
//                     "value": "Cutout",
//                     "descriptionExtra": null,
//                     "main": false
//                 }
//             ]
//         },
//         {
//             "title": "Interfaces/connectors",
//             "specifications": [
//                 {
//                     "title": "Wi-Fi standards",
//                     "value": "802.11 ax",
//                     "descriptionExtra": "wifi text",
//                     "main": false
//                 },
//                 {
//                     "title": "Bluetooth",
//                     "value": "5.3",
//                     "descriptionExtra": "bluetooth text",
//                     "main": false
//                 },
//                 {
//                     "title": "NFC",
//                     "value": "Yes",
//                     "descriptionExtra": "nfc text",
//                     "main": false
//                 },
//                 {
//                     "title": "USB interface",
//                     "value": "Lightning",
//                     "descriptionExtra": "usb info",
//                     "main": false
//                 }
//             ]
//         },
//         {
//             "title": "Phone body",
//             "specifications": [
//                 {
//                     "title": "Body protection",
//                     "value": "Protection against dust and moisture",
//                     "descriptionExtra": "text",
//                     "main": false
//                 },
//                 {
//                     "title": "Protection class",
//                     "value": "IP68",
//                     "descriptionExtra": null,
//                     "main": false
//                 },
//                 {
//                     "title": "Biometric protection",
//                     "value": "Face recognition",
//                     "descriptionExtra": null,
//                     "main": false
//                 }
//             ]
//         }
//     ],
//     "recommendations": null,
//     "accessories": null
//   }