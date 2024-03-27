//Not the production code.

function sanitize(str) {
    return str.trim().replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("\'", "&apos;").replaceAll("&", "&amp;").replaceAll("\\", "&#92;").replaceAll("\/", "&#47;");
}