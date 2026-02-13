import { covers } from '@/data/covers'
import { NextResponse } from 'next/server'
import jsPDF from 'jspdf'

export async function GET() {
  try {
    // Create a new PDF document
    const doc = new jsPDF()
    
    // Set up the document
    const pageWidth = doc.internal.pageSize.width
    const margin = 20
    const lineHeight = 6
    let yPosition = margin
    
    // Header
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text('Currie Wayne Clayton', pageWidth / 2, yPosition, { align: 'center' })
    
    yPosition += 10
    doc.setFontSize(14)
    doc.setFont('helvetica', 'normal')
    doc.text('Complete Song Repertoire', pageWidth / 2, yPosition, { align: 'center' })
    
    yPosition += 8
    doc.setFontSize(10)
    doc.text('Acoustic Covers & Originals • Bars, Patios & Private Events', pageWidth / 2, yPosition, { align: 'center' })
    
    yPosition += 5
    doc.text('Delaware, Maryland, Pennsylvania, New Jersey', pageWidth / 2, yPosition, { align: 'center' })
    
    yPosition += 20
    
    // Draw a line under header
    doc.line(margin, yPosition - 5, pageWidth - margin, yPosition - 5)
    
    // Song list
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    
    const columnWidth = (pageWidth - margin * 3) / 2
    const leftColumn = margin
    const rightColumn = margin + columnWidth + margin
    
    let currentColumn = 'left'
    let leftY = yPosition
    let rightY = yPosition
    
    covers.forEach((song) => {
      const songText = song.title
      const artistText = `by ${song.originalArtist}`
      
      let currentY = currentColumn === 'left' ? leftY : rightY
      
      // Check if we need a new page
      if (currentY > doc.internal.pageSize.height - 30) {
        if (currentColumn === 'left') {
          currentColumn = 'right'
          currentY = rightY
        } else {
          doc.addPage()
          leftY = rightY = margin + 20
          currentColumn = 'left'
          currentY = leftY
        }
      }
      
      const x = currentColumn === 'left' ? leftColumn : rightColumn
      
      // Song title (bold)
      doc.setFont('helvetica', 'bold')
      doc.text(songText, x, currentY, { maxWidth: columnWidth - 5 })
      
      // Artist (normal, slightly indented)
      doc.setFont('helvetica', 'normal')
      doc.setFontSize(8)
      doc.text(artistText, x + 5, currentY + 4, { maxWidth: columnWidth - 10 })
      doc.setFontSize(9)
      
      const nextY = currentY + lineHeight + 2
      
      if (currentColumn === 'left') {
        leftY = nextY
        currentColumn = 'right'
      } else {
        rightY = nextY
        currentColumn = 'left'
      }
    })
    
    // Add note at the bottom
    const finalY = Math.max(leftY, rightY) + 20
    let noteY = finalY
    
    // Check if we need a new page for the note
    if (noteY > doc.internal.pageSize.height - 40) {
      doc.addPage()
      noteY = margin + 20
    }
    
    // Draw a line before note
    doc.line(margin, noteY - 5, pageWidth - margin, noteY - 5)
    
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('Always learning new requests!', pageWidth / 2, noteY + 10, { align: 'center' })
    
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.text('Don\'t see your favorite song? I\'m constantly adding new material', pageWidth / 2, noteY + 18, { align: 'center' })
    doc.text('to keep my performances fresh and engaging.', pageWidth / 2, noteY + 24, { align: 'center' })
    
    // Footer
    doc.setFontSize(8)
    doc.text(`© ${new Date().getFullYear()} Currie Wayne Clayton`, pageWidth / 2, noteY + 35, { align: 'center' })
    doc.text(`${covers.length}+ covers plus original compositions`, pageWidth / 2, noteY + 40, { align: 'center' })
    
    // Generate PDF as buffer
    const pdfBuffer = Buffer.from(doc.output('arraybuffer'))
    
    // Return PDF with proper headers for download
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="currie-wayne-clayton-song-list.pdf"',
        'Content-Length': pdfBuffer.length.toString(),
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return NextResponse.json({ error: 'Failed to generate PDF' }, { status: 500 })
  }
}