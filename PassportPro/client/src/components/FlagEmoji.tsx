interface FlagEmojiProps {
  code: string;
  flag?: string;
  className?: string;
}

export default function FlagEmoji({ code, flag, className = "" }: FlagEmojiProps) {
  // Render the flag emoji from the country data if provided
  if (flag) {
    return <span className={className}>{flag}</span>;
  }
  
  // If no flag emoji is provided, generate from country code
  // Convert country code to flag emoji
  const codePoints = Array.from(code.toUpperCase())
    .map(char => 127397 + char.charCodeAt(0));
  
  const flagEmoji = String.fromCodePoint(...codePoints);
  
  return <span className={className}>{flagEmoji}</span>;
}
