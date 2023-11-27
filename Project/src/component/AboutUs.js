// src/AboutUs.js
import React from 'react';
import { Container, Typography, Paper } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Paper
        sx={{
          padding: 3,
          margin: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          ABOUT US
        </Typography>
        <Typography variant="h5" gutterBottom>
          THE TRUSTED ONLINE MEDICINE PARTNER
        </Typography>
        <Typography variant="h6" gutterBottom>
          FOR MORE THAN SEVEN MILLION LOYAL CUSTOMERS
        </Typography>
        <img src="https://www.netmeds.com/images/cms/offers/1660147767_about.jpg"></img>
        <Typography paragraph>
          <strong>Who we are - India's most convenient online pharmacy</strong>
        </Typography>
        <Typography paragraph>
          Netmeds.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices to over 9 million happy customers – PAN India. At netmeds.com, we help you look after your own health effortlessly as well as take care of loved ones wherever they may reside in India. You can buy and send medicines from any corner of the country - with just a few clicks of the mouse.
        </Typography>

        <Typography paragraph>
          <strong>What we do – Offer fast online access to medicines with convenient home delivery</strong>
        </Typography>
        <Typography paragraph>
          At netmeds.com, we make a wide range of prescription medicines and other health products conveniently available all across India. Even second and third-tier cities and rural villages can now have access to the latest medicines. Since we also offer generic alternatives to most medicines, online buyers can expect significant savings.
        </Typography>

        <Typography variant="h5" gutterBottom>
          CONVENIENCE
        </Typography>
        <Typography paragraph>
          Heavy traffic, lack of parking, monsoons, shop closed, forgetfulness… these are some of the reasons that could lead to skipping of vital medications. Since taking medicines regularly is a critical component of managing chronic medical conditions, it’s best not to run out of essential medicines. Just log on to netmeds.com, place your order online, and have your medicines delivered to you – without leaving the comfort of your home.
        </Typography>
        <Typography paragraph>
          What’s more, with easy access to reliable drug information, you get to know all about your medicine at netmeds.com, and once you’re a Netmeds customer, you’ll get regular refill reminders, so you’ll never again come up short of medicines.
        </Typography>

        <Typography variant="h5" gutterBottom>
          ONE-STOP SHOP
        </Typography>
        <Typography paragraph>
          At netmeds.com, we not only provide you with a wide range of medicines listed under various categories, but we also offer a wide choice of OTC products including wellness products, vitamins, diet/fitness supplements, herbal products, pain relievers, diabetic care kits, baby/mother care products, beauty care products, and surgical supplies.
        </Typography>

        <Typography variant="h5" gutterBottom>
          TRUST
        </Typography>
        <Typography paragraph>
          With the highest standards of ethical pharmacy practice, Netmeds is committed to providing authentic cum affordable medicines as well as a customer service philosophy that is worthy of our valued customers’ loyalty. We offer a superior online shopping experience, which includes ease of navigation and absolute transactional security.
        </Typography>

        <Typography paragraph>
          It's very helpful to buy medicine online. I ordered medicine. Got right time delivered and secured. Satisfied customer service. Thanks Netmeds!
        </Typography>
      </Paper>
    </Container>
  );
};

export default AboutUs;
