import React, { Component } from 'react';
import { FiRefreshCw, FiHome, FiChevronDown, FiChevronUp, FiAlertTriangle } from 'react-icons/fi';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, showDetails: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  toggleDetails = () => {
    this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      const errorMessage = this.state.error?.message || String(this.state.error);
      const errorStack = this.state.error?.stack || '';

      return (
        <div className="min-h-screen bg-black text-white flex flex-col justify-between items-center py-16 px-4 font-noir-pro relative overflow-hidden">
          {/* Cyber Glow Gradients */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#E1017D]/5 blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#00AACB]/5 blur-[100px] pointer-events-none"></div>

          {/* Logo / Header */}
          <div className="z-10 w-full max-w-4xl flex justify-start mb-8">
            <img src="/assets/logo.svg" alt="Team Up" className="w-32 sm:w-40" />
          </div>

          {/* Main Error Box */}
          <div className="z-10 max-w-2xl w-full bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-10 text-center shadow-2xl relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E1017D] to-[#00AACB]"></div>

            {/* Warning Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E1017D]/10 border border-[#E1017D]/35 text-[#E1017D] mb-6">
              <FiAlertTriangle className="text-3xl" />
            </div>

            {/* Title / Description */}
            <h1 className="font-posterama text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4">
              Connection <span className="text-[#00AACB]">Interrupted</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-lg mx-auto">
              Don't worry, your game progress is safe! A minor glitch temporarily paused the action. Let's reboot the interface and get you right back to playing.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={this.handleReload}
                className="w-full sm:w-auto bg-[#00AACB] hover:bg-[#E1017D] text-white font-bold px-8 py-3.5 rounded-lg tracking-widest uppercase text-xs sm:text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(0,170,203,0.3)] hover:shadow-[0_4px_20px_rgba(225,1,125,0.4)] flex items-center justify-center gap-2"
              >
                <FiRefreshCw className="text-base animate-spin-hover" /> Reboot Interface
              </button>

              <a
                href="/"
                className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-white border border-white/20 font-bold px-8 py-3.5 rounded-lg tracking-widest uppercase text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FiHome className="text-base" /> Return to Lobby
              </a>
            </div>

            {/* Technical Details (Collapsible) */}
            <div className="border-t border-white/10 pt-4 text-left">
              <button
                onClick={this.toggleDetails}
                className="flex items-center justify-between w-full text-xs text-gray-500 hover:text-gray-300 uppercase tracking-wider font-semibold focus:outline-none transition-colors"
              >
                <span>{this.state.showDetails ? 'Hide details' : 'Show details'}</span>
                {this.state.showDetails ? <FiChevronUp /> : <FiChevronDown />}
              </button>

              {this.state.showDetails && (
                <div className="mt-4 bg-black/80 rounded-lg p-4 font-mono text-[11px] sm:text-xs text-[#E1017D] overflow-x-auto max-h-40 border border-white/5 leading-relaxed">
                  <div className="font-bold text-white mb-1">Error: {errorMessage}</div>
                  <pre className="text-gray-400 whitespace-pre-wrap">{errorStack}</pre>
                </div>
              )}
            </div>
          </div>

          {/* Footer Text */}
          <div className="z-10 mt-12 text-center text-xs text-gray-600">
            If the problem persists, please reach out to support. Team Up © {new Date().getFullYear()}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
