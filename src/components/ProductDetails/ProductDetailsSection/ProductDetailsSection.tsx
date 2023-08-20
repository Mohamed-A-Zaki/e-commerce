import { Box, Button, Typography } from "@mui/material";

export default function ProductDetailsSection() {
  const renderColor = (color: string) => {
    return (
      <Box
        width={30}
        height={30}
        bgcolor={color}
        borderRadius={"50%"}
        border={1}
        borderColor={"#ddd"}
        sx={{ cursor: "pointer" }}
      ></Box>
    );
  };

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
        <Box>
          <Typography
            fontSize={14}
            color={"text.secondary"}
            fontWeight={"bold"}
            component={"span"}
          >
            الماركة :
          </Typography>

          <Typography
            component={"span"}
            fontWeight={"bold"}
            mr={1}
            fontSize={20}
          >
            سامسنوج
          </Typography>
        </Box>

        <Box display={"flex"} gap={1} mt={2}>
          {renderColor("#f00")}
          {renderColor("#fff")}
          {renderColor("#000")}
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
        <Box
          px={2}
          py={1.5}
          bgcolor={"#fff"}
          borderRadius={2}
          border={1}
          borderColor={"#ddd"}
        >
          34000 جنيه
        </Box>

        <Button
          variant="contained"
          sx={{
            py: 1.5,
            px: 2,
            bgcolor: "#000",
            borderRadius: 2,
            "&:hover": { bgcolor: "#000", color: "#999" },
          }}
        >
          اضف للعربة
        </Button>
      </Box>
    </Box>
  );
}
