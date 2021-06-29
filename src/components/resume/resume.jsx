import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/umd/entry.webpack';
import './resume.css';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [pageNumber] = useState(1);
  const useStyles = makeStyles((theme) => ({
    textCenter: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2rem',
      minHeight: '50vh',
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.textCenter}>
      <Typography variant="h6">My Resume</Typography>
      <Document file={{ url: '/assets/resume.pdf' }} renderMode="canvas">
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
}
