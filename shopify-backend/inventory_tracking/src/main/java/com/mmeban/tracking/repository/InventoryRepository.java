package com.mmeban.tracking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mmeban.tracking.model.Items;

public interface InventoryRepository extends JpaRepository<Items, Long>{
	
}