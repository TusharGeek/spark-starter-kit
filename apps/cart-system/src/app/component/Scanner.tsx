import React, { Component } from 'react';
import Quagga from 'quagga';

// Define prop types
interface ScannerProps {
  onDetected: (result: any) => void;
}

class Scanner extends Component<ScannerProps> {
  componentDidMount() {
    Quagga.init(
      {
        inputStream: {
          type: 'LiveStream',
          constraints: {
            width: 640,
            height: 320,
            facingMode: 'environment', // Use rear camera
          },
        },
        locator: {
          halfSample: true,
          patchSize: 'large',
          debug: {
            showCanvas: true,
            showPatches: false,
            showFoundPatches: false,
            showSkeleton: false,
            showLabels: false,
            showPatchLabels: false,
            showRemainingPatchLabels: false,
            boxFromPatches: {
              showTransformed: true,
              showTransformedBox: true,
              showBB: true,
            },
          },
        },
        numOfWorkers: 4,
        decoder: {
          readers: ["ean_reader", "ean_8_reader"],
          debug: {
            drawBoundingBox: true,
            showFrequency: true,
            drawScanline: true,
            showPattern: true,
          },
        },
        locate: true,
      },
      (err:any) => {
        if (err) {
          console.error(err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected(this._onDetected);
  }

  componentWillUnmount() {
    Quagga.offDetected(this._onDetected);
    Quagga.stop();
  }

  
  _onDetected = (result: any) => {
    console.log(result); // Debug log
    this.props.onDetected(result); // Pass result to the parent component
  };

  render() {
    return <div id="interactive" className="viewport" />;
  }
}

export default Scanner;
