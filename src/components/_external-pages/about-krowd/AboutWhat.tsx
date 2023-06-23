// material
import { alpha, useTheme, styled } from '@mui/material/styles';
import { Box, Grid, Container, Typography } from '@mui/material';
// utils
// import { fPercent } from '../../../utils/formatNumber';
// import mockData from '../../../utils/mock-data';
//
import { MHidden } from '../../@material-extend';
import { varFadeInUp, varFadeInRight, MotionInView } from '../../animate';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import classNames from 'classnames';
import cookies from 'js-cookie';
// ----------------------------------------------------------------------

// const LABEL = ['Development', 'Design', 'Marketing'];

// const MOCK_SKILLS = [...Array(3)].map((_, index) => ({
//   label: LABEL[index],
//   value: mockData.number.percent(index)
// }));

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left'
  }
}));
const Language = [
  {
    code: 'en',
    name: 'Tiếng việt',
    countryCode: 'vn'
  },
  {
    code: 'vi',
    name: 'English',
    countryCode: 'en'
  }
];
// ----------------------------------------------------------------------

// type ProgressItemProps = {
//   progress: {
//     label: string;
//     value: number;
//   };
// };

// function ProgressItem({ progress }: ProgressItemProps) {
//   const { label, value } = progress;
//   return (
//     <Box sx={{ mt: 3 }}>
//       <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
//         <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           {fPercent(value)}
//         </Typography>
//       </Box>
//       <LinearProgress
//         variant="determinate"
//         value={value}
//         sx={{
//           '& .MuiLinearProgress-bar': { bgcolor: 'grey.700' },
//           '&.MuiLinearProgress-determinate': { bgcolor: 'divider' }
//         }}
//       />
//     </Box>
//   );
// }

export default function AboutWhat() {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const currentLanguage = Language.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();
  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;
  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <MHidden width="mdDown">
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <MotionInView variants={varFadeInUp}>
                    <Box
                      component="img"
                      src="/static/about/what-1.jpg"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow
                      }}
                    />
                  </MotionInView>
                </Grid>
                <Grid item xs={6}>
                  <MotionInView variants={varFadeInUp}>
                    <Box component="img" src="/static/about/what-2.jpg" sx={{ borderRadius: 2 }} />
                  </MotionInView>
                </Grid>
              </Grid>
            </Grid>
          </MHidden>

          <Grid item xs={12} md={6} lg={5}>
            <MotionInView variants={varFadeInRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                {t('aboutus_krowd_title')}
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInRight}>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === 'light' ? 'text.secondary' : 'common.white'
                }}
              >
                {t('aboutus_krowd_1')}
                <br />
                {t('aboutus_krowd_2')}
                {/* Đầu tư cho vay vốn là một hình thức đầu tư trong đó các cá nhân và tổ chức cùng đầu
                tư và tài trợ cho các doanh nghiệp vừa và nhỏ và thu lợi nhuận dưới hình thức lãi
                xuất hàng tháng. Doanh nghiệp sẽ trích một phần doanh thu hàng tháng theo tỉ lệ thỏa
                thuận để hoàn trả vốn và lãi suất cho nhà đầu tư. */}
              </Typography>
            </MotionInView>

            {/* <Box sx={{ my: 5 }}>
              {MOCK_SKILLS.map((progress) => (
                <MotionInView key={progress.label} variants={varFadeInRight}>
                  <ProgressItem progress={progress} />
                </MotionInView>
              ))}
            </Box>

            <MotionInView variants={varFadeInRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                endIcon={<Icon icon={roundArrowRightAlt} width={24} height={24} />}
              >
                Check out our work
              </Button>
            </MotionInView> */}
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}