#!/bin/bash

# Prompt for name
read -p "Enter your first name: " firstname
read -p "Enter your middle name: " middlename
read -p "Enter your last name: " lastname

# Prompt for subject scores
read -p "Enter score for subject 1 (out of 70): " subject1
read -p "Enter score for subject 2 (out of 70): " subject2
read -p "Enter score for subject 3 (out of 70): " subject3

# Calculate percentage
total_score=$((subject1 + subject2 + subject3))
percentage=$((total_score * 100 / 210))  # Assuming 210 is the total marks for all subjects (70 each)

# Write data to a file
filename="${firstname}_${middlename}_${lastname}_data.txt"
echo "Name: $firstname $middlename $lastname" > "$filename"
echo "Subject 1: $subject1/70" >> "$filename"
echo "Subject 2: $subject2/70" >> "$filename"
echo "Subject 3: $subject3/70" >> "$filename"
echo "Total Score: $total_score/210" >> "$filename"
echo "Percentage: $percentage%" >> "$filename"

echo "Data saved to $filename."
