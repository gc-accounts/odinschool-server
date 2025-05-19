#!/bin/bash

# Database configuration
DB_HOST=${DATABASE_HOST:-"localhost"}
DB_PORT=${DATABASE_PORT:-"3306"}
DB_NAME=${DATABASE_NAME:-"strapi"}
DB_USER=${DATABASE_USERNAME:-"strapi"}
DB_PASS=${DATABASE_PASSWORD:-"strapi"}

# Create backup directory if it doesn't exist
BACKUP_DIR="./backups"
mkdir -p $BACKUP_DIR

# Generate timestamp for backup file
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_FILE="$BACKUP_DIR/${DB_NAME}_backup_$TIMESTAMP.sql"

# Perform the backup
echo "Starting database backup..."
mysqldump -h $DB_HOST -P $DB_PORT -u $DB_USER -p$DB_PASS $DB_NAME > $BACKUP_FILE

# Check if backup was successful
if [ $? -eq 0 ]; then
    echo "Backup completed successfully!"
    echo "Backup file created at: $BACKUP_FILE"
else
    echo "Backup failed!"
    exit 1
fi 