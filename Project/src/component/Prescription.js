// Prescription.js
import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

const Prescription = () => {
  return (
    <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px', width: '100%',backgroundColor:'#ab47bc',color:'white' }}>
      Prescription Drugs
      </Typography>
      <Card style={{ maxWidth: 400, margin: '20px auto' }}>
        <img
          src="https://wellonapharma.com/admincms/product_img/product_resize_img/atorvastatin-20mg-tablets_1619445277.jpg"
          alt="Medicine"
          style={{ width: '100%', height: '280px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Atorvastatin
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Description of the medicine and its uses.
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 400, margin: '20px auto' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPjJwR7ZrGl_TaeN9ZUd8Um8Miblr1Qn4Lw&usqp=CAU"
          alt="Medicine"
          style={{ width: '100%', height: '320px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Levothyroxine
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Description of the medicine and its uses.
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 400, margin: '20px auto' }}>
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/4/300174797/ZE/MX/UR/27892630/glucophage-1000mg-metformin-hydrochlorid-tablet-.png"
          alt="Medicine"
          style={{ width: '100%', height: '360px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Lisinopril
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Description of the medicine and its uses.
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 400, margin: '20px auto' }}>
        <img
          src="https://5.imimg.com/data5/WY/AS/MY-68805898/lisinopril-tablet-500x500.jpg"
          alt="Medicine"
          style={{ width: '100%', height: '260px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Lisinopril
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Description of the medicine and its uses.
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 400, margin: '20px auto' }}>
        <img
          src="https://5.imimg.com/data5/SELLER/Default/2023/6/320707674/IP/LC/LZ/21617815/norvasc-generic-pills-500x500-v1.jpg"
          alt="Medicine"
          style={{ width: '100%', height: '360px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Amlodipine
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Description of the medicine and its uses.
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>
      <Card style={{ maxWidth: 400, margin: '20px auto' }}>
        <img
          src="https://m.media-amazon.com/images/I/61xjOljyR6L._AC_UF1000,1000_QL80_.jpg"
          alt="Medicine"
          style={{ width: '100%', height: '290px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Omeprazole
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            Description of the medicine and its uses.
          </Typography> */}
        </CardContent>
        <CardActions>
          <Button variant="contained" color="secondary">
            Add to Cart
          </Button>
        </CardActions>
      </Card>

      {/* Add more cards for other medicines as needed */}
    </Container>
    
  );
};

export default Prescription;