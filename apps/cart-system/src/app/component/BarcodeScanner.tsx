import React, { Component } from 'react';
import Scanner from './Scanner';
import {
  Box,
  Button,
  Modal,
  Text,
  Container,
  Paper,
} from '@mantine/core';

// Define the interface for the state
interface BarcodeScannerState {
  scanning: boolean;
  latestCode: string;
  modalVisible: boolean;
}

interface BarcodeResult {
  codeResult?: {
    code: string;
  };
}

interface BarcodeScannerProps {
  onBarcodeDetected: (code: string) => void; // Callback function to pass the scanned barcode
}

class BarcodeScanner extends Component<BarcodeScannerProps, BarcodeScannerState> {
  state: BarcodeScannerState = {
    scanning: false,
    latestCode: '',
    modalVisible: false,
  };

  _scan = () => {
    this.setState((prevState) => ({ scanning: !prevState.scanning }));
  };

  _onDetected = (result: BarcodeResult) => {
    try {
      const code = result?.codeResult?.code;
      if (code) {
        this.setState({
          scanning: false,
          latestCode: code,
          modalVisible: true,
        });

        // Call the callback to pass the scanned barcode to the parent component
        this.props.onBarcodeDetected(code);
      }
    } catch (e) {
      console.error(e);
    }
  };

  render() {
    const { latestCode, modalVisible, scanning } = this.state;

    return (
      <Container>
        <Paper shadow="md" p="md">
          {/* Scanner Section */}
          <Box mb={16}>
            <Text>Scan your product using the barcode scanner below:</Text>
            <Button mt={16} color="indigo" onClick={this._scan}>
              {scanning ? 'Stop Scanner' : 'Start Scanner'}
            </Button>
          </Box>

          {/* Show Scanner */}
          {scanning && (
            <Box
              mt={16}
              sx={{
                width: '100%',
                maxWidth: '100%',
                height: 'auto',
                aspectRatio: '16/9', // Keep a consistent aspect ratio
                border: '2px solid gray',
                borderRadius: '8px',
              }}
            >
              <Scanner onDetected={this._onDetected} />
            </Box>
          )}
        </Paper>

        {/* Display latest scan result */}
        <Modal opened={modalVisible} onClose={() => this.setState({ modalVisible: false })} title="Scan Result">
          <Text size="lg">Scanned Code: {latestCode || 'No data scanned'}</Text>
        </Modal>
      </Container>
    );
  }
}

export default BarcodeScanner;
