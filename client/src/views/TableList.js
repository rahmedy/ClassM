import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Grade Scale(BASED ON A TOTAL OF 1500 POINTS) </CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Letter Grade</th>
                        <th>Grade Percentage</th>
                        <th>Points</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>	A+</td>
                        <td>97%</td>
                        <td>1455 – 1500</td>
                        
                      </tr>
                      <tr>
                        <td>A</td>
                        <td>93 – 96.9%</td>
                        <td>1395 – 1454</td>
                        
                      </tr>
                      <tr>
                        <td>A-</td>
                        <td>90 – 92.9%</td>
                        <td>1350 – 1394</td>
                        
                      </tr>
                      <tr>
                        <td>B+</td>
                        <td>87 – 89.9%</td>
                        <td>1305 – 1349</td>
                        
                      </tr>
                      <tr>
                        <td>B</td>
                        <td>83 – 86.9%</td>
                        <td>1245 – 1304</td>
        
                      </tr>
                      <tr>
                        <td>B-</td>
                        <td>80 – 82.9%</td>
                        <td>1200 – 1244</td>
                        
                      </tr>
                      <tr>
                        <td>C+</td>
                        <td>77 –  79.9%</td>
                        <td>1155 – 1199</td>
                        
                      </tr>
                      <tr>
                        <td>B</td>
                        <td>83 – 86.9%</td>
                        <td>1245 – 1304</td>
        
                      </tr>
                      <tr>
                        <td>B-</td>
                        <td>80 – 82.9%</td>
                        <td>1200 – 1244</td>
                        
                      </tr>
                      <tr>
                        <td>C+</td>
                        <td>77 –  79.9%</td>
                        <td>1155 – 1199</td>
                        
                      </tr>
                        <tr>
                        <td>C</td>
                        <td>73 – 76.9%</td>
                        <td>1095 – 1154</td>
        
                      </tr>
                      <tr>
                        <td>C-</td>
                        <td>70 – 72.9%</td>
                        <td>1050 –1094</td>
                        
                      </tr>
                      <tr>
                        <td>D</td>
                        <td>60 – 69.9%</td>
                        <td>900 – 1049</td>
                        
                      </tr>
                      <tr>
                        <td>F</td>
                        <td>Below 60%</td>
                        <td>Below 900</td>
                        
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;

