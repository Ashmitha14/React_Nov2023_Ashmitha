// OTCMedicinePage.js
import React from 'react';
import { Container, Typography, Button, Card, CardContent, CardActions } from '@mui/material';

const OTCMedicinePage = () => {
  return (
    <Container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      <Typography variant="h4" gutterBottom style={{ marginTop: '20px', width: '100%',backgroundColor:'#ab47bc',color:'white' }}>
        Over-the-Counter Medicine
      </Typography>
      <Card style={{ maxWidth: 400, margin: '20px auto' }}>
        <img
          src="https://onemg.gumlet.io/ymn3dcyqmfudgcorfgde.png"
          alt="Medicine"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
          Healthcare Devices
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
          src="https://onemg.gumlet.io/nherof9d47s0wgmmrrzh.png"
          alt="Medicine"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Ayurveda
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
          src="https://onemg.gumlet.io/xwwgr3meblfkjfne48u4.png"
          alt="Medicine"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Covid Essentials
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
          src="https://onemg.gumlet.io/ps4fg4uwav0ffel9up3l.png"
          alt="Medicine"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Healthy Snacks & Drinks
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
          src="https://onemg.gumlet.io/wvj6ialknvnqebvoqyhj.png"
          alt="Medicine"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Homeopathy
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
          src="https://onemg.gumlet.io/kzravzn7uqknryv7qna5.png"
          alt="Medicine"
          style={{ width: '100%', height: '300px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            Hair Care
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

export default OTCMedicinePage;