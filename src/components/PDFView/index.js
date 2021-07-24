import Pdf from './Resume.pdf';

function PDFView() {
    return (
        <a href={Pdf} without rel="noopener noreferrer" target="_blank">
            <button type="button" class="btn btn-light">
                My Resume
                </button>
        </a>

    );
}

export default PDFView;
