import { Box, Typography } from "@mui/material";

import ColorItem from "../../../utility/ColorItem/ColorItem";
import MainButton from "../../../utility/MainButton/MainButton";
import PriceButton from "../../../utility/PriceButton/PriceButton";

export default function ProductDetailsSection() {
  return (
    <Box p={3} borderRadius={3}>
      <Box>
        <Typography fontSize={14} color={"text.secondary"} fontWeight={"bold"}>
          الالكترونيات :
        </Typography>

        <Typography fontSize={14} mt={2}>
          آيفون XR بذاكرة سعة 128 جيجابايت ويدعم تقنية 4G LTE مع تطبيق فيس تايم
          (برودكت) أحمر
        </Typography>

        <Typography color={"#FFC107"} mt={1}>
          4.5
        </Typography>
      </Box>

      <Box my={4}>
        <Box display={"flex"} alignItems={"center"} gap={1}>
          <Typography
            fontSize={14}
            fontWeight={"bold"}
            color={"text.secondary"}
          >
            الماركة :
          </Typography>

          <Typography fontWeight={"bold"} fontSize={20}>
            سامسنوج
          </Typography>
        </Box>

        <Box display={"flex"} gap={1} mt={2}>
          <ColorItem color="#f00" />
          <ColorItem color="#fff" />
          <ColorItem color="#000" />
        </Box>
      </Box>

      <Box my={4}>
        <Typography fontSize={14} color={"text.secondary"} fontWeight={"bold"}>
          المواصفات :
        </Typography>

        <Typography fontSize={14} mt={2}>
          يتميز بوجود بطاقة SIM مزدوجة بطاقة فعلية وبطاقة e-SIM يمكنك فتح قفل
          هاتفك الآيفون وتسجيل الدخول إلى التطبيقات والحسابات وغيرها بسهولة،
          وتعدّ خاصية معرَف الوجه الأسرع والأكثر أماناً للمصادقة عن طريق بصمة
          الوجه يتميز بشريحة A12 بايونيك والتي تعد أذكى وأقوى شريحة في الهواتف
          الذكية شكلت أكثر كاميرات العالم شهرة عصراً جديداً من التصوير
          الفوتوغرافي حيث يعمل جهاز الاستشعار الابتكاري بخاصية ISP والمحرك
          العصبي، ما يمكّنك من التقاط صور لم يسبق لها مثيل كاميرا بعدسة واحدة
          تجعل الأشخاص الموجودين في الأمام في نطاق تركيز دقيق على عكس نطاق
          الخلفية غير الواضح نظرة عامة
        </Typography>
      </Box>

      <Box display={"flex"} gap={2}>
        <PriceButton>34000</PriceButton>
        <MainButton> اضف للعربة</MainButton>
      </Box>
    </Box>
  );
}
