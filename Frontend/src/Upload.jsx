import React, { useState } from 'react';
import { uploadReport, getInsight } from './Api';
import ResultTable from './components/Table';
import TrendChart from './components/TrendChart';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const FileUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  .folder-upload {
    --folder-width: 160px;
    --folder-height: 100px;
    --transition: 350ms;
    position: relative;
    width: var(--folder-width);
    height: calc(var(--folder-height) * 1.5);
    margin-bottom: 20px;
    
    &:hover .front-side {
      transform: rotateX(-30deg) skewX(10deg);
    }
    
    .folder {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      animation: float 2.5s infinite ease-in-out;
      
      .front-side {
        z-index: 2;
        transition: transform var(--transition);
        
        .tip {
          width: 100px;
          height: 20px;
          background: linear-gradient(135deg, #ff9a56, #ff6f56);
          border-radius: 12px 12px 0 0;
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .cover {
          width: var(--folder-width);
          height: var(--folder-height);
          background: linear-gradient(135deg, #ffe563, #ffc663);
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
      }
      
      .back-side {
        position: absolute;
        top: 5px;
        left: 50%;
        transform: translateX(-50%);
        
        &::before,
        &::after {
          content: "";
          display: block;
          width: var(--folder-width);
          height: var(--folder-height);
          background: white;
          opacity: 0.3;
          border-radius: 10px;
          position: absolute;
        }
        
        &::before {
          transform: rotate(-5deg);
        }
        
        &::after {
          transform: rotate(-3deg);
        }
      }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
    }
  }
  
  .upload-label {
    background: linear-gradient(135deg, #6dd5ed, #2193b0);
    color: white;
    padding: 12px 25px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }
    
    input[type="file"] {
      display: none;
    }
  }
`;

const Upload = ({ token }) => {
  const [file, setFile] = useState(null);
  const [results, setResults] = useState([]);
  const [trends, setTrends] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedParameter, setSelectedParameter] = useState(null);
  const [insight, setInsight] = useState('');
  const [insightLoading, setInsightLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert('Please select a file');
    setLoading(true);
    try {
      const data = await uploadReport(file, token);
      setResults(data.table || []);
      setTrends(data.trends || {});
    } catch (err) {
      alert('Upload failed');
    }
    setLoading(false);
  };

  const handleInsightClick = async (parameter, value) => {
    setSelectedParameter({ parameter, value });
    setInsight('');
    setShowModal(true);
    setInsightLoading(true);
    try {
      const result = await getInsight(parameter, value, token);
      setInsight(result);
    } catch (err) {
      setInsight('Failed to fetch insight.');
    }
    setInsightLoading(false);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-800">MediScan AI</h1>
        <p className="text-md text-gray-500">Upload & Analyze Your Lab Reports</p>
      </motion.header>

      <motion.section
        className="bg-white shadow-lg border border-gray-200 rounded-xl max-w-3xl mx-auto p-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Upload Report</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">PDF or image up to 10MB</p>

        <div className="flex flex-col items-center">
          <FileUploadWrapper>
            <div className="folder-upload">
              <div className="folder">
                <div className="front-side">
                  <div className="tip" />
                  <div className="cover" />
                </div>
                <div className="back-side" />
              </div>
            </div>
            <label className="upload-label">
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
              Choose a file
            </label>
          </FileUploadWrapper>

          <button
            onClick={handleUpload}
            disabled={loading || !file}
            className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all duration-300"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : 'Analyze Report'}
          </button>
        </div>
      </motion.section>

      {/* Rest of the component remains the same */}
      {results.length > 0 && (
        <motion.section className="mt-16 max-w-5xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Extracted Parameters</h3>
          <div className="overflow-x-auto border rounded-lg">
            <table className="min-w-full text-sm bg-white">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="px-4 py-2">Parameter</th>
                  <th className="px-4 py-2">Value</th>
                  <th className="px-4 py-2">Unit</th>
                  <th className="px-4 py-2">Range</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Insight</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, idx) => (
                  <tr key={idx} className="border-t hover:bg-gray-50">
                    <td className="px-4 py-2">{r.parameter}</td>
                    <td className="px-4 py-2">{r.value}</td>
                    <td className="px-4 py-2">{r.unit}</td>
                    <td className="px-4 py-2">{r.range}</td>
                    <td className="px-4 py-2 text-blue-600 font-medium">{r.attention}</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleInsightClick(r.parameter, r.value)}
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.section>
      )}

      {Object.keys(trends).length > 0 && (
        <motion.section className="mt-16 max-w-4xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Health Trends</h3>
          <TrendChart trends={trends} />
        </motion.section>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-xl w-full max-w-xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Insight: <span className="text-blue-600">{selectedParameter?.parameter}</span>
            </h2>
            {insightLoading ? (
              <p className="text-gray-500 animate-pulse">Generating insight...</p>
            ) : (
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">{insight}</p>
            )}
            <button
              onClick={() => setShowModal(false)}
              className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Upload;
