// @flow

import React from 'react';
// import '../../styles/tabler.css';
// import 'tabler-react/dist/Tabler.css';

import {
  Page,
  Grid,
  // StoreCard,
  Table,
  Card,
  Badge,
} from 'tabler-react';

// import SiteWrapper from '../SiteWrapper.react';

const Properties = () => {
  return (
    <div>
      <Page.Content title="Store Components">
        <Grid.Row>
          <Grid.Col lg={12}>
            <Card>
              <Table className="card-table table-vcenter">
                <Table.Body>
                  <Card>
                        Hello
                  </Card>
                  <Table.Row>
                    <Table.Col>
                      <img
                        alt=""
                        src="https://tabler.github.io/tabler/demo/products/apple-iphone7-special.jpg"
                        className="h-8"
                      />
                    </Table.Col>
                    <Table.Col>
                      Apple iPhone 7 Plus 256GB Red Special Edition
                    </Table.Col>
                    <Table.Col
                      className="text-right text-muted d-none d-md-table-cell text-nowrap"
                    >
                      98 reviews
                    </Table.Col>
                    <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                      38 offers
                    </Table.Col>
                    <Table.Col className="text-right">
                      <strong>$499</strong>
                    </Table.Col>
                  </Table.Row>
                  <Table.Row>
                    <Table.Col>
                      <img
                        alt=""
                        src="https://tabler.github.io/tabler/demo/products/apple-macbook-pro.jpg"
                        className="h-8"
                      />
                    </Table.Col>
                    <Table.Col>
                      Apple MacBook Pro i7 3,1GHz/16/512/Radeon 560 Space Gray
                      {' '}
                      <Badge color="default"> New </Badge>
                    </Table.Col>
                    <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                      97 reviews
                    </Table.Col>
                    <Table.Col className="text-right text-muted d-none d-md-table-cell text-nowrap">
                      13 offers
                    </Table.Col>
                    <Table.Col className="text-right">
                      <strong>$1499</strong>
                    </Table.Col>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card>
          </Grid.Col>
        </Grid.Row>
      </Page.Content>
    </div>
  );
};

export default Properties;
