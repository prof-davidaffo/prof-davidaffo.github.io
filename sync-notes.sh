#!/bin/bash

# Percorso assoluto della cartella sorgente con le note originali
SOURCE="$HOME/Documents/Obsidian Vault/Scuola/Didattica/Argomenti"

# Cartella di destinazione relativa alla root del progetto Quartz
DEST="content/Argomenti"

# Crea la cartella di destinazione se non esiste
mkdir -p "$DEST"

echo ">> Rimozione dei file già presenti in '$DEST' che corrispondono al pattern..."
find "$DEST" -type f \( \
  -iname "*verific*" -o \
  -iname "*soluz*" -o \
  -iname "*correzion*" -o \
  -iname "*corrett*" \
\) -exec rm -v {} +

echo ">> Sincronizzazione dei file da '$SOURCE' a '$DEST' (escludendo file sensibili)..."
rsync -av --update --delete \
  --exclude='*verific*' \
  --exclude='*Verific*' \
  --exclude='*soluz*' \
  --exclude='*Soluz*' \
  --exclude='*correzion*' \
  --exclude='*Correzion*' \
  --exclude='*corrett*' \
  --exclude='*Corrett*' \
  --exclude='*_NOSYNC*' \
  "$SOURCE/" "$DEST/"

echo "✅ Sincronizzazione completata."

