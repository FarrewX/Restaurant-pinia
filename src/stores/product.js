import { defineStore } from "pinia"
import {ref, computed} from 'vue'
import axios from 'axios'

export function useProductStore() {
}
export const useProductList = defineStore('product', () => {
  const products = ref([
      {
        title: 'vgn dragonfly f1 moba',
        imageUrl: '/image/vgn dragonfly f1 moba.png',
        price: 2490,
        desc: `เมาส์ตัวนี้ถูกจัดอยู่ในเมาส์ที่มีขนาด Medium - Small ซึ่งมีรูปทรงของเมาส์ในการจับใช้งาน จะให้ความรู้สึกคล้ายกับ Logitech G PRO X Superlight ผสมกับ Zowie S2 สามารถจับได้ทั้ง Claw / Palm และ Fingertip ไม่ได้มีเอกลักษณ์โดนเด่นในการจับเมาส์แบบใดแบบหนึ่ง ทำให้มีความยืดหยุ่นในการใช้งานสูงมาก.
        การในอัปเกรดเพิ่มเติมของเมาส์ตัวนี้ จะมีเมาส์ฟีท Tiger ICE ที่ตัดสำเร็จมารองรับในการเปลี่ยนใช้งาน และยังมีเมาส์กริป BT.L ที่ยังแถมมาจากโรงงานสำหรับผู้ที่รู้สึกว่าพื้นผิวของเมาส์ลื่นมากจนเกินไป อีกทั้งยังรองรับ การใช้งานแบบ 4000 Hz ผ่าน Dongle วางจำหน่ายแยก (ราคาประมาณ 400.-) ในการใช้งานอย่างเต็มประสิทธิภาพด้วยการแบตเตอรี่ที่รองรับถึง 500 mAh ที่มากกว่าเมาส์ในช่วงราคา 3000-4000.- มากกว่าเท่าตัว`,
        id: 0
      },
      {
        title: 'g pro x superlight',
        imageUrl: '/image/g pro x superlight.png',
        price: 4390,
        desc: "ขจัดทุกอุปสรรคที่ขวางทางสู่ชัยชนะด้วยเมาส์ PRO ที่เร็วที่สุดและเบาที่สุดของเรา อาวุธใหม่ที่ยอดเยี่ยมสำหรับนักกีฬาอีสปอร์ตระดับมืออาชีพชั้นนำของโลก ด้วยน้ำหนักไม่ถึง 63 กรัม และมอบการเลื่อนที่เกือบไร้แรงเสียดทาน PRO X SUPERLIGHT สานต่อปรัชญาการออกแบบของเราที่ว่า ZERØ OPPOSITION หรือไร้คู่แข่ง ความมุ่งมั่นของเราคือการขจัดทุกอุปสรรค เพื่อสร้างสรรค์การเชื่อมต่อที่บริสุทธิ์ที่สุดระหว่างผู้เล่นและเกม",
        id:1
      },
      {
        title: 'g wolves htx 4k',
        imageUrl: '/image/HTX 4K.png',
        price: 6404,
        desc: "G-Wolves เป็นบริษัทอุปกรณ์ต่อพ่วงที่ตั้งอยู่ในประเทศจีน แม้จะแชร์ฟีเจอร์ต่างๆ มากมาย HTX 4K ก็แตกต่างจาก Hati-S Plus 4K หลายประการ สิ่งสำคัญที่สุดคือ รูปร่างจะแตกต่างกัน เนื่องจาก HTX 4K ใช้ดีไซน์ที่ต่ำกว่า แม้ว่าขนาดจะใกล้เคียงกันมากก็ตาม นอกจากนี้ เนื่องจากการปรับปรุงเพิ่มเติมในด้านวิศวกรรมเครื่องกลและแบตเตอรี่เริ่มต้นที่เล็กลง HTX 4K จึงเบาลงอีกที่ 43 กรัม และรุ่นที่ใช้รูที่มีน้ำหนักเพียง 39 กรัมก็มีวางจำหน่ายเช่นกัน ภายใน HTX 4K ใช้เซ็นเซอร์ PAW3395 ของ PixArt ที่มีความสามารถ 26,000 CPI สวิตช์ปุ่มหลักแบบ Zippy ใช้งานได้ 60 ล้านคลิก และมาพร้อมกับความสามารถในการใช้โพลไร้สาย 4000 Hz ซึ่งลดทั้งเซ็นเซอร์และเวลาแฝงในการคลิก เมื่อเทียบกับอัตราการโพลที่ต่ำกว่า มีการติดตั้งขารอง PTFE บริสุทธิ์เป็นค่าเริ่มต้น และมีขารองสำหรับเปลี่ยนหลายชุดรวมอยู่ในกล่อง พร้อมด้วยแบตเตอรี่สำรองขนาดใหญ่และอุปกรณ์เสริมอื่นๆ ตัวเลือกการปรับแต่งตามปกติมีให้ในแพ็คเกจซอฟต์แวร์น้ำหนักเบาซึ่งไม่จำเป็นต้องติดตั้ง HTX 4K มีให้เลือกทั้งสีดำ แดง ขาว แดงทับทิม หรือชมพูเชอร์รี่",
        id:2
      },
      {
        title: 'g wolves hst plus 4K',
        imageUrl: '/image/HTS Plus 4K.png',
        price: 6098,
        desc: "G-Wolves HTS Plus 4k Wireless Gaming Mouse ได้รวบรวมความคิดเห็นที่หลากหลาย. ลูกค้าบางคนเห็นว่าเกินราคาและพบปัญหาต่าง ๆ เช่นความยากลําบากในการเข้าถึงอัตราการสํารวจความคิดเห็น 4k เต็มรูปแบบที่โฆษณาติดอ่างระหว่างการเล่นเกม, ปัญหาการควบคุมคุณภาพและ rattling เช่นแบตเตอรี่หลวมเมื่อเดินทางมาถึง. อย่างไรก็ตามคนอื่น ๆ ยกย่องว่าเป็นเมาส์ที่น่าทึ่งด้วยการเคลื่อนไหวที่นุ่มนวลเป็นพิเศษปุ่มที่ดีและคุณภาพล้อเลื่อนและเลือกรุ่น 3395 แม้ว่าจะไม่ได้อยู่นานนัก. ซอฟต์แวร์ได้รับการวิพากษ์วิจารณ์ว่าขาดกราฟิกในขณะที่ยังไม่สามารถแก้ไขปัญหาทางเทคนิคได้อย่างเพียงพอ. ท้ายที่สุดมันถูกพิจารณาว่าเป็นเมาส์ประสิทธิภาพสูงที่มาพร้อมกับป้ายราคาที่หนักและอาจไม่เหมาะสําหรับทุกขนาดมือ.",
        id:3
      },
      {
        title: 'lamzu atlantis og v2 4k',
        imageUrl: '/image/lamzu atlantis og v2 4k.png',
        price: 3400,
        desc: "OG V2 Pro เป็นเมาส์ Atlantis เวอร์ชันใหม่ใช้ Nordic MCU ใหม่อัตราการสำรวจ1000Hz การกำหนดค่าอื่นๆไม่เปลี่ยนแปลงสามารถอัปเกรดเป็นอัตราการสำรวจ4000Hz หากใช้ที่รองรับ4K dongle ใน furture.",
        id:4
      },
      {
        title: 'Darmshark M3 4K',
        imageUrl: '/image/Darmshark M3 4K.png',
        price: 2680,
        desc: "ขอแนะนำเมาส์เล่นเกม Darmoshark M3-4K รุ่นใหม่ทั้งหมด M3-4K เป็นเมาส์เกมมิ่ง M3-4K ที่ได้รับการอัพเกรดเป็นเมาส์เกมมิ่งที่มีความเร็วสูงถึง 4000Hz ประสิทธิภาพของเมาส์ได้รับการปรับปรุงอย่างมากด้วยเวลาตอบสนองที่เร็วขึ้น การติดตามที่แม่นยำ และการตอบสนองที่แม่นยำ มันทำให้ประสบการณ์การเล่นเกมและการใช้งานปกติดีขึ้นในทุกวิถีทางด้วยอัตราผลตอบแทนที่ดีขึ้น M3-4K มอบประสบการณ์การคลิกที่ราบรื่นด้วย Kailh GM8.0 Black Mamba มันใช้เซ็นเซอร์ระดับเรือธงสำหรับเล่นเกม PAW3395 ทำให้ผู้ใช้สามารถปรับ DPI ได้สูงถึง 26,000 การติดตาม 650IPS และการเร่งความเร็ว 50g !!",
        id:5
      },
      {
        title: 'Darmoshark M3s Varun 2K',
        imageUrl: '/image/Darmoshark M3s Varun 2K.png',
        price: 2403,
        desc: "varun darmoshark m3-s มาในบรรจุภัณฑ์ที่มีสไตล์มาก ในกล่องประกอบด้วยดองเกิลที่รองรับ 2khz ดองเกิลปกติสำหรับ 1khz รองเท้าสเก็ตคู่ที่เล็กกว่าเป็นพิเศษ และเทปพันด้ามจับ ดองเกิลทั่วไปอยู่ในช่องเก็บของที่ด้านล่างของเมาส์ ดังนั้นอย่าลืมนำออกด้วย ฉันเกือบจะทิ้งมันไว้ในนั้นหลังจากเสียบดองเกิล 2k ออกจากกล่องโดยตรง การตั้งค่าเริ่มต้นสำหรับเมาส์คือ debounce 8ms, การโพล 500 hz และ 800 dpi ดังนั้นตรวจสอบให้แน่ใจว่าคุณดาวน์โหลดซอฟต์แวร์และทำการเปลี่ยนแปลง",
        id:6
      },
      {
        title: 'Pulsar X2 Wireless',
        imageUrl: '/image/Pulsar X2 Wireless.png',
        price: 3490,
        desc: "Pulsar X2 Wireless Gaming Mouse เป็นเมาส์เกมมิ่งไร้สาย 5 ปุ่มกด มาในดีไซน์เรียบง่ายสไตล์มินิมอลพร้อมรูปทรงแบบสมมาตร ออกแบบให้จับได้ทั้งแบบ Fingertip grip และ Claw grip น้ำหนักเบาหวิวเพียง 56 กรัม สเปกภายในไม่ธรรมดา ติดตั้งเซนเซอร์ประสิทธิภาพสูงรุ่นเรือธงของ PixArt อย่าง PAW3395 ที่มาพร้อมเทคโนโลยี Motion-Sync เพื่อความแม่นยำสูงสุดทุกการเคลื่อนที่ ความละเอียดสูงสุด 26,000 DPI, 650 IPS, Acceleration 50g , และ Polling rate ที่ 1000Hz / 1ms มาคู่กับสวิตช์ Kailh GM 8.0 รองรับการคลิกสูงสุด 80 ล้านครั้ง พร้อมด้วยล้อเลื่อน TTC Gold Encoder ที่แม่นยำและไหลลื่น",
        id:7
      },
      {
        title: 'Glorious Model O Wireless',
        imageUrl: '/image/Glorious Model O Wireless.png',
        price: 2690,
        desc: "เมาส์ไร้สาย Glorious Model O Wireless Gaming mouse จัดว่ามีการออกแบบที่ยอดเยี่ยมสุด ๆ เพราะแม้ว่าจะต้องทำงานแบบไร้สาย ตัวเมาส์กลับมีน้ำหนักไม่ต่างจากเดิมเลย โดยตัว Model O Wireless นั้นจะมีน้ำหนักเพียง 69 กรัมเท่านั้น หนักกว่ารุ่นมีสายของตัวเองแค่ 1 กรัม โดยสมรรถภาพในการใช้งานเองก็ไม่ได้ด้อยลงไปแม้แต่น้อย เรียกได้ว่าทีมออกแบบของ Glorious ยกประสบการณ์การใช้งานเมาส์ไซส์ M ที่ขึ้นชื่อว่าเบาที่สุดมาให้คุณได้สัมผัสในรูปแบบไร้สายอย่างเป็นทางการ ซึ่งนอกจากน้ำหนักที่เบาจนทำให้สามารถขยับได้อย่างฉับไวแล้วตัวเมาส์เล่นเกม Glorious ทุกรุ่นยังมาพร้อมกับพื้นผิว G Skate ที่เป็น PTFE 100% ทำให้สามารถเคลื่อนที่ได้อย่างลื่นไหลว่องไวกว่าพื้นเมาส์เกมมิ่งธรรมดาทั่ว ๆ ไป เมื่อรวมกับเซนเซอร์ที่มีความว่องไวและความแม่นยำสูง ทำให้ได้เมาส์ที่รวดเร็วและแม่นยำ เอาใจเกมเมอร์ที่ต้องการความรวดเร็วฉับไวในสนามแข่งอย่างแนว FPS เป็นที่สุด",
        id:8
      },
      {
        title: 'Loga Garuda PRO + Wireless',
        imageUrl: '/image/Loga Garuda PRO + Wireless.png',
        price: 2990,
        desc: "Loga Garuda PRO + ไม่เพียงแต่สเปกที่ให้มาสำหรับการเล่นเกมโดยเฉพาะ ยังมีเรื่องดีไซน์กรอบเมาส์ที่ทำให้มันมีน้ำหนักเบา และการเปลี่ยนแบตเตอรี่ที่แปลกใหม่ที่เมาส์น้อยตัวจะทำได้ กรอบเมาส์ที่สามารถเปลี่ยนได้ถึง 4 รูปแบบ ให้เข้ากับขนาดสรีระอุ้งมือของผู้ใช้งาน รองรับการใช้งานร่วมกับ Software ของทางแบรนด์เพื่อปรับแต่งและตั้งค่าเมาส์ให้เข้ากับการใช้งานมากที่สุด ใครที่อยากสัมผัสประสบการณ์เมาส์เกมมิ่งจากแบรนด์คนไทยที่ครองใจคนทั่วโลก เซนเซอร์ และสวิตซ์คุณภาพ กรอบที่เปลี่ยนได้ น้ำหนักเบาเคลื่อนไหวได้ดั่งใจ ต้องไม่พลาด Loga Garuda PRO + ตัวนี้เลยครับ",
        id:9
      },
     ])

    const list_products = computed(() => products.value)

    const load_products = computed(() => products.value.length > 0)

    const fetch_products = async () => {
        await axios.get(`${import.meta.env.VITE_API}`)
        .then((response) => {
            // console.log(response.data)
            products.value = response.data
        }).catch((err) => {
            console.log(err)
        })
    }

    const search_products = computed(() => {
        if(input.value.length < 3) return products.value

        return products.value.filter((prd) => {
            if(prd.title.toLowerCase().includes(input.value.toLowerCase()) == false) {
                return false
            } else {
                return prd.title.toLowerCase().includes(input.value.toLowerCase())
            }
        })
    })

    return { products, fetch_products, list_products, load_products, search_products }
})