/// <reference types="react" />
import { BrowserQRCodeReader } from '@zxing/browser';
import { Result } from '@zxing/library';
export declare type QrReaderProps = {
  /**
   * Media track constraints object, to specify which camera and capabilities to use
   */
  constraints?: MediaTrackConstraints;
  /**
   * Called when an error occurs.
   */
  onResult?: OnResultFunction;
  /**
   * Property that represents the view finder component
   */
  ViewFinder?: (props: any) => React.ReactElement<any, any> | null;
  /**
   * Property that represents the scan period
   */
  scanDelay?: number;
  /**
   * Property that represents the ID of the video element
   */
  videoId?: string;
  /**
   * Property that represents an optional className to modify styles
   */
  className?: string;
  /**
   * Property that represents a style for the container
   */
  containerStyle?: any;
  /**
   * Property that represents a style for the video container
   */
  videoContainerStyle?: any;
  /**
   * Property that represents a style for the video
   */
  videoStyle?: any;
  /**
   * Boolean to enable support for multiple barcode formats, not just QR codes
   */
  multiFormat?: boolean;
};
export declare type OnResultFunction = (
  /**
   * The QR values extracted by Zxing
   */
  result?: Result | undefined | null,
  /**
   * The name of the exceptions thrown while reading the QR
   */
  error?: Error | undefined | null,
  /**
   * The instance of the QR browser reader
   */
  codeReader?: BrowserQRCodeReader
) => void;
export declare type UseQrReaderHookProps = {
  /**
   * Media constraints object, to specify which camera and capabilities to use
   */
  constraints?: MediaTrackConstraints;
  /**
   * Callback for retrieving the result
   */
  onResult?: OnResultFunction;
  /**
   * Property that represents the scan period
   */
  scanDelay?: number;
  /**
   * Property that represents the ID of the video element
   */
  videoId?: string;
  /**
   * Boolean to enable support for multiple barcode formats, not just QR codes
   */
  multiFormat?: boolean;
};
export declare type UseQrReaderHook = (props: UseQrReaderHookProps) => void;
